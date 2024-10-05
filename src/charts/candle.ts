import { ChartOptions } from "../types";
import { DEFAULT_COLORS, RESET } from "../colors";

export type OHLC = [open: number, high: number, low: number, close: number];

export function createCandleStickChart(
  candles: OHLC[],
  options: ChartOptions = {}
): string {
  let result = "";
  const maxPrice = Math.max(...candles.map((c) => c[1]));
  const minPrice = Math.min(...candles.map((c) => c[2]));

  // Apply width option, default to number of candles if not provided
  const width = options.width || candles.length;
  // Apply height option, default to 20 if not provided
  const height = options.height || 20;

  for (let i = 0; i < height; i++) {
    let row = "│ ";
    for (let j = 0; j < width; j++) {
      const candle = candles[j % candles.length]; // Repeat candles if width > candles.length
      row += `${
        candle[0] >= candle[3] ? DEFAULT_COLORS.up : DEFAULT_COLORS.down
      }${drawCandle(candle, maxPrice, minPrice, height)[i]}${RESET}`;
    }
    row += "│";
    result += row + "\n";
  }

  return result;
}

function drawCandle(
  data: OHLC,
  maxPrice: number,
  minPrice: number,
  height: number
) {
  const bodyChar = "█";
  const wickChar = "│";

  const range = maxPrice - minPrice;
  const scale = height / range;

  const highPos = Math.floor((maxPrice - data[1]) * scale);
  const lowPos = Math.floor((maxPrice - data[2]) * scale);
  const openPos = Math.floor((maxPrice - data[0]) * scale);
  const closePos = Math.floor((maxPrice - data[3]) * scale);

  let candle = Array(height).fill(" ");

  // Draw upper wick
  for (let i = highPos; i < Math.min(openPos, closePos); i++) {
    candle[i] = wickChar;
  }

  // Draw body
  const bodyStart = Math.min(openPos, closePos);
  const bodyEnd = Math.max(openPos, closePos);
  for (let i = bodyStart; i <= bodyEnd; i++) {
    candle[i] = bodyChar;
  }

  // Draw lower wick
  for (let i = Math.max(openPos, closePos) + 1; i <= lowPos; i++) {
    candle[i] = wickChar;
  }

  return candle.join("");
}
