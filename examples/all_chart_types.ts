import { ChartConfiguration, ChartType, createCharts } from "../src/index";

const chartDataArray: ChartConfiguration<ChartType>[] = [
  { type: "bar", data: [1, 3, 5, 2, 4] },
  { type: "line", data: [5, 4, 3, 2, 1] },
  { type: "scatter", data: [1, 2, 3, 4, 5] },
  {
    type: "histogram",
    data: [1, 1, 2, 2, 2, 3, 3, 4, 5],
  },
  {
    type: "candle",
    data: [
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
    ],
  },
];

console.log("All Chart Types Example:");
console.log(createCharts(chartDataArray, 2));
