from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
import pandas as pd
from datetime import datetime, timedelta

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"status": "Bloomberg Python Data Bridge Active"}

@app.get("/api/v1/quote/{ticker}")
async def get_quote(ticker: str):
    try:
        stock = yf.Ticker(ticker)
        info = stock.info
        return {
            "ticker": ticker,
            "price": info.get("currentPrice") or info.get("regularMarketPrice"),
            "change": info.get("regularMarketChange"),
            "pct": info.get("regularMarketChangePercent"),
            "volume": info.get("regularMarketVolume"),
            "marketCap": info.get("marketCap"),
            "pe": info.get("trailingPE"),
            "source": "yfinance-py"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/v1/history/{ticker}")
async def get_history(ticker: str, period: str = "1mo"):
    try:
        stock = yf.Ticker(ticker)
        df = stock.history(period=period)
        data = []
        for index, row in df.iterrows():
            data.append({
                "date": index.strftime("%Y-%m-%d"),
                "close": row["Close"],
                "high": row["High"],
                "low": row["Low"],
                "open": row["Open"],
                "volume": row["Volume"]
            })
        return {"ticker": ticker, "history": data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/v1/analysis/{ticker}")
async def get_analysis(ticker: str):
    try:
        stock = yf.Ticker(ticker)
        # Quantitative analytics using Pandas
        df = stock.history(period="1y")
        returns = df['Close'].pct_change().dropna()

        return {
            "ticker": ticker,
            "volatility": float(returns.std() * (252 ** 0.5)), # Annualized Vol
            "sharpe": float(returns.mean() / returns.std() * (252 ** 0.5)) if returns.std() != 0 else 0,
            "max_drawdown": float((df['Close'] / df['Close'].cummax() - 1).min()),
            "recommendation": stock.info.get("recommendationKey"),
            "target_price": stock.info.get("targetMeanPrice")
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
