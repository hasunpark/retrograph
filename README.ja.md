# 📊 retrograph

Node.js アプリケーション用の多目的 CLI 風チャート可視化ツール

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md)

## 🚀 インストール

npm を使用してパッケージをインストールします：

```bash
npm install retrograph
```

## 使用方法

## Example Result

<img src="./examples/example.png" alt="example" width="600">

### 単一チャート

単一のチャートを作成するには、createChart 関数を使用します：

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
}); // オプションはオプショナルです
```

OHLC 構造の candleData 配列を作成します。
"candle"をタイプとして、candleData と width、height などのオプションを使用して createChart を呼び出します。
チャートを表示したい場所で使用してください。

#### 使用例

```typescript
console.log(candleChart);
```

### 複数チャート

複数のチャートを作成するには、createCharts 関数を使用します：

```typescript
import { createCharts, ChartConfiguration, ChartType } from "retrograph";

const chartConfigurations: ChartConfiguration<ChartType>[] = [
  { type: "candle", data: candleData },
  { type: "bar", data: barData },
  { type: "line", data: lineData },
  { type: "scatter", data: scatterData },
  { type: "histogram", data: histogramData },
];

const compositeChart = createCharts(chartConfigurations, 2); // オプションはオプショナルです
```

この配列と間隔値で createCharts を呼び出します。

## 📈 サポートされているチャートタイプ

| チャートタイプ             | ステータス        |
| -------------------------- | ----------------- |
| ローソク足 ("candle")      | ✅ 完全に実装済み |
| 棒 ("bar")                 | 🚧 未実装         |
| 線 ("line")                | 🚧 未実装         |
| 散布図 ("scatter")         | 🚧 未実装         |
| ヒストグラム ("histogram") | 🚧 未実装         |

## API

### createChart\<T extends ChartType\>(type: T, data: ChartDataMap[T], options?: ChartOptions): string

指定されたタイプの単一チャートを作成します。

- type: 作成するチャートのタイプ。
- data: チャートタイプに合致するデータ。
- options: チャートのオプション設定。

### createCharts(charts: ChartConfiguration\<ChartType\>[], spacing: number = 1, options?: ChartOptions): string

複数のチャートを作成し、単一の出力に結合します。

- charts: チャート設定の配列。
- spacing: チャート間の改行数（デフォルト：1）。
- options: すべてのチャートに適用されるオプション設定。

### ChartOptions

ChartOptions インターフェースには以下のプロパティが含まれます：

| プロパティ | タイプ | デフォルト値 | 説明                             |
| ---------- | ------ | ------------ | -------------------------------- |
| width      | number | 80           | チャートの幅                     |
| height     | number | 20           | チャートの高さ                   |
| color      | object | -            | チャートの色オプション           |
| color.up   | string | '\x1b[31m'   | 上昇トレンドに使用される色（赤） |
| color.down | string | '\x1b[32m'   | 下降トレンドに使用される色（緑） |

すべてのプロパティはオプショナルです。色の値はターミナルの色用の ANSI エスケープコードです。

注：デフォルトの色は`colors.ts`ファイルで定義されています：

- 上昇色（赤）：`\x1b[31m`
- 下降色（緑）：`\x1b[32m`

## 例

より詳細な使用例については、リポジトリの examples フォルダをチェックしてください：

- single_chart.ts: 単一のローソク足チャートの作成を示します。（完全に実装済み）
- composite_chart.ts: 1 つの出力で複数のチャートを作成する方法を示します。（部分的に実装済み、更新が必要）
- all_chart_types.ts: サポートされているすべてのチャートタイプの例を表示します。（部分的に実装済み、更新が必要）

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。
