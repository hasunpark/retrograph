import { createCandleStickChart } from "../src/charts/candle";
import fs from "fs";
describe("createCandleStickChart", () => {
  it("should create a candlestick chart with specific output", () => {
    const chart = createCandleStickChart(
      JSON.parse(fs.readFileSync("./__tests__/testData/candles.json", "utf8")),
      {
        width: 40,
        height: 10,
      }
    );
    expect(chart).toBe(
      fs.readFileSync("./__tests__/testData/candleChart.txt", "utf8")
    );
  });
});
