import { createChart } from "../src/index";
import { OHLC } from "../src/charts/candle";

function generateCandleData(): OHLC {
  const open = Math.random() * 100 + 50;
  const close = Math.random() * 100 + 50;
  const high = Math.max(open, close) + Math.random() * 10;
  const low = Math.min(open, close) - Math.random() * 10;
  return [open, high, low, close];
}

const candles: OHLC[] = Array(40)
  .fill(undefined)
  .map(() => generateCandleData());

const candleChart = createChart("candle", candles, { width: 40, height: 10 });

console.log("Candle Chart Example:");
console.log(candleChart);
