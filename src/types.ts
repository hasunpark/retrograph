import { OHLC } from "./charts/candle";

export interface ChartOptions {
  width?: number;
  height?: number;
  color?: {
    up?: string;
    down?: string;
  };
}

export type ChartType = "bar" | "line" | "scatter" | "histogram" | "candle";

export interface ChartConfiguration<T extends ChartType> {
  type: T;
  data: ChartDataMap[T];
  options?: ChartOptions;
}

export type CreateChartFunction<T extends ChartType> = (
  data: ChartDataMap[T],
  options: ChartOptions
) => string;

export type ChartDataMap = {
  bar: number[];
  line: number[];
  scatter: [number, number][];
  histogram: number[];
  candle: OHLC[];
};
