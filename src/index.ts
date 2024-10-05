import {
  ChartType,
  ChartOptions,
  ChartDataMap,
  ChartConfiguration,
} from "./types";
import {
  createBarChart,
  createCandleStickChart,
  createHistogram,
  createLineChart,
  createScatterPlot,
} from "./charts";

const chartFunctions: {
  [K in ChartType]: (data: ChartDataMap[K], options: ChartOptions) => string;
} = {
  candle: createCandleStickChart,
  bar: createBarChart,
  line: createLineChart,
  scatter: createScatterPlot,
  histogram: createHistogram,
};

export function createChart<T extends ChartType>(
  type: T,
  data: ChartDataMap[T],
  options: ChartOptions = {}
): string {
  const chartFunction = chartFunctions[type];
  if (!chartFunction) {
    throw new Error(`Unsupported chart type: ${type}`);
  }
  return chartFunction(data, options);
}

export function createCharts(
  charts: ChartConfiguration<ChartType>[],
  spacing: number = 1,
  options: ChartOptions = {}
): string {
  return "createCharts not implemented";
  // return charts
  //   .map(({ type, data }) => createChart(type, data, options))
  //   .join("\n".repeat(spacing));
}

export { ChartType, ChartOptions, ChartDataMap, ChartConfiguration };
