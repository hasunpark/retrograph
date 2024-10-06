# 📊 retrograph

A versatile CLI-like chart visualization tool for Node.js applications.

[English](#english) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md)

## 🚀 Installation

Install the package using npm:

```bash
npm install retrograph
```

## Example Result

<img src="./examples/example.png" alt="example" width="600">

## Usage

### Single Chart

To create a single chart, use the createChart function:

```typescript
import { createChart } from "retrograph";

const candleData: OHLC[] = [
  [100, 110, 90, 105],
  [105, 115, 95, 108],
  [108, 120, 100, 112],
];

const candleChart = createChart("candle", candleData, {
  width: 40,
  height: 10,
}); // options are optional
```

Create an array of candleData in OHLC structure.
Call createChart with "candle" as the type, your candleData, and options like width and height.
Use anywhere you would like to display the chart.

#### Example Usage

```typescript
console.log(candleChart);
```

### Multiple Charts

To create multiple charts, use the createCharts function:

```typescript
import { createCharts, ChartConfiguration, ChartType } from "retrograph";

const chartConfigurations: ChartConfiguration<ChartType>[] = [
  { type: "candle", data: candleData },
  { type: "bar", data: barData },
  { type: "line", data: lineData },
  { type: "scatter", data: scatterData },
  { type: "histogram", data: histogramData },
];

const compositeChart = createCharts(chartConfigurations, 2); // options are optional
```

Call createCharts with this array and a spacing value.

## 📈 Supported Chart Types

| Chart Type              | Status                 |
| ----------------------- | ---------------------- |
| Candlestick ("candle")  | ✅ Fully implemented   |
| Bar ("bar")             | 🚧 Not yet implemented |
| Line ("line")           | 🚧 Not yet implemented |
| Scatter ("scatter")     | 🚧 Not yet implemented |
| Histogram ("histogram") | 🚧 Not yet implemented |

## API

### createChart\<T extends ChartType\>(type: T, data: ChartDataMap[T], options?: ChartOptions): string

Creates a single chart of the specified type.

- type: The type of chart to create.
- data: The data for the chart, which should match the chart type.
- options: Optional configuration for the chart.

### createCharts(charts: ChartConfiguration\<ChartType\>[], spacing: number = 1, options?: ChartOptions): string

Creates multiple charts and combines them into a single output.

- charts: An array of chart configurations.
- spacing: The number of newlines between charts (default: 1).
- options: Optional configuration applied to all charts.

### ChartOptions

The ChartOptions interface includes the following properties:

| Property   | Type   | Default Value | Description                            |
| ---------- | ------ | ------------- | -------------------------------------- |
| width      | number | 80            | The width of the chart                 |
| height     | number | 20            | The height of the chart                |
| color      | object | -             | Color options for the chart            |
| color.up   | string | '\x1b[31m'    | Color used for upward trends (red)     |
| color.down | string | '\x1b[32m'    | Color used for downward trends (green) |

All properties are optional. The color values are ANSI escape codes for terminal colors.

Note: The default colors are defined in the `colors.ts` file:

- Up color (red): `\x1b[31m`
- Down color (green): `\x1b[32m`

## Examples

Check the examples folder in the repository for more detailed usage examples:

- single_chart.ts: Demonstrates creating a single candlestick chart. (Fully implemented)
- composite_chart.ts: Shows how to create multiple charts in one output. (Partially implemented, needs update)
- all_chart_types.ts: Displays examples of all supported chart types. (Partially implemented, needs update)

## Feature Requests

If you have a feature you'd like to see implemented, please let us know by opening a GitHub issue with the "feature request" label. This helps us prioritize and track new ideas.

To submit a feature request:

1. Go to the [Issues](https://github.com/hasunpark/retrograph/issues) page of the repository.
2. Click on "New Issue".
3. Select the "Feature Request" template.
4. Fill out the template with as much detail as possible.

We appreciate your feedback and suggestions!

## License

This project is licensed under the MIT License.
