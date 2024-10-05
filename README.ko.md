# 📊 retrograph

Node.js 애플리케이션을 위한 다목적 CLI 스타일 차트 시각화 도구

[English](README.md) | [한국어](README.ko.md) | [日本語](README.ja.md) | [中文](README.zh.md)

## 🚀 설치

npm을 사용하여 패키지를 설치하세요:

```bash
npm install retrograph
```

## Example Result

<img src="./examples/example.png" alt="example" width="600">

## 사용법

### 단일 차트

단일 차트를 생성하려면 createChart 함수를 사용하세요:

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
}); // 옵션은 선택사항입니다
```

OHLC 구조의 candleData 배열을 생성합니다.
"candle"을 타입으로, candleData와 width, height 같은 옵션을 사용하여 createChart를 호출합니다.
차트를 표시하고 싶은 곳 어디에서나 사용하세요.

#### 사용 예시

```typescript
console.log(candleChart);
```

### 다중 차트

여러 차트를 생성하려면 createCharts 함수를 사용하세요:

```typescript
import { createCharts, ChartConfiguration, ChartType } from "retrograph";

const chartConfigurations: ChartConfiguration<ChartType>[] = [
  { type: "candle", data: candleData },
  { type: "bar", data: barData },
  { type: "line", data: lineData },
  { type: "scatter", data: scatterData },
  { type: "histogram", data: histogramData },
];

const compositeChart = createCharts(chartConfigurations, 2); // 옵션은 선택사항입니다
```

이 배열과 간격 값으로 createCharts를 호출합니다.

## 📈 지원되는 차트 유형

| 차트 유형                | 상태                  |
| ------------------------ | --------------------- |
| 캔들스틱 ("candle")      | ✅ 완전히 구현됨      |
| 막대 ("bar")             | 🚧 아직 구현되지 않음 |
| 선 ("line")              | 🚧 아직 구현되지 않음 |
| 산점도 ("scatter")       | 🚧 아직 구현되지 않음 |
| 히스토그램 ("histogram") | 🚧 아직 구현되지 않음 |

## API

### createChart\<T extends ChartType\>(type: T, data: ChartDataMap[T], options?: ChartOptions): string

지정된 유형의 단일 차트를 생성합니다.

- type: 생성할 차트의 유형.
- data: 차트 유형에 맞는 데이터.
- options: 차트의 선택적 구성.

### createCharts(charts: ChartConfiguration\<ChartType\>[], spacing: number = 1, options?: ChartOptions): string

여러 차트를 생성하고 단일 출력으로 결합합니다.

- charts: 차트 구성의 배열.
- spacing: 차트 사이의 줄 바꿈 수 (기본값: 1).
- options: 모든 차트에 적용되는 선택적 구성.

### ChartOptions

ChartOptions 인터페이스는 다음 속성을 포함합니다:

| 속성       | 타입   | 기본값     | 설명                               |
| ---------- | ------ | ---------- | ---------------------------------- |
| width      | number | 80         | 차트의 너비                        |
| height     | number | 20         | 차트의 높이                        |
| color      | object | -          | 차트의 색상 옵션                   |
| color.up   | string | '\x1b[31m' | 상승 추세에 사용되는 색상 (빨간색) |
| color.down | string | '\x1b[32m' | 하락 추세에 사용되는 색상 (녹색)   |

모든 속성은 선택사항입니다. 색상 값은 터미널 색상을 위한 ANSI 이스케이프 코드입니다.

참고: 기본 색상은 `colors.ts` 파일에 정의되어 있습니다:

- 상승 색상 (빨간색): `\x1b[31m`
- 하락 색상 (녹색): `\x1b[32m`

## 예제

더 자세한 사용 예제는 저장소의 examples 폴더를 확인하세요:

- single_chart.ts: 단일 캔들스틱 차트 생성을 보여줍니다. (완전히 구현됨)
- composite_chart.ts: 하나의 출력에 여러 차트를 생성하는 방법을 보여줍니다. (부분적으로 구현됨, 업데이트 필요)
- all_chart_types.ts: 지원되는 모든 차트 유형의 예제를 보여줍니다. (부분적으로 구현됨, 업데이트 필요)

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
