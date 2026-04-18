export function calculateSMA(data: number[], period: number): (number | null)[] {
  const sma: (number | null)[] = [];
  for (let i = 0; i < data.length; i++) {
    if (i < period - 1) {
      sma.push(null);
      continue;
    }
    const sum = data.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
    sma.push(sum / period);
  }
  return sma;
}

export function calculateRSI(data: number[], period: number = 14): (number | null)[] {
  const rsi: (number | null)[] = [];
  let gains = 0;
  let losses = 0;

  for (let i = 1; i < data.length; i++) {
    const diff = data[i] - data[i - 1];
    if (i <= period) {
      if (diff > 0) gains += diff;
      else losses -= diff;

      if (i === period) {
        let avgGain = gains / period;
        let avgLoss = losses / period;
        let rs = avgGain / (avgLoss || 1);
        rsi.push(100 - (100 / (1 + rs)));
      } else {
        rsi.push(null);
      }
    } else {
      const gain = diff > 0 ? diff : 0;
      const loss = diff < 0 ? -diff : 0;

      // Wilder's smoothing
      const lastRsi = rsi[rsi.length - 1]!;
      const rs = ( ( (gains * (period - 1)) + gain ) / period ) / ( ( (losses * (period - 1)) + loss ) / period || 1 );
      rsi.push(100 - (100 / (1 + rs)));
    }
  }
  return [null, ...rsi];
}

export function calculateBollingerBands(data: number[], period: number = 20, stdDev: number = 2) {
  const upper: (number | null)[] = [];
  const lower: (number | null)[] = [];
  const middle = calculateSMA(data, period);

  for (let i = 0; i < data.length; i++) {
    if (i < period - 1) {
      upper.push(null);
      lower.push(null);
      continue;
    }
    const slice = data.slice(i - period + 1, i + 1);
    const mean = middle[i]!;
    const variance = slice.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / period;
    const sd = Math.sqrt(variance);
    upper.push(mean + (stdDev * sd));
    lower.push(mean - (stdDev * sd));
  }
  return { upper, lower, middle };
}
