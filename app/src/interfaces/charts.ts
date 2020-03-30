export interface LineChartInterface {
  y: number | undefined;
  name: string;
}

export interface BarChartInterface {
  y: number[] | undefined;
  name: string;
}

export interface PieChartInterface {
  y: number | undefined;
  name: string;
}

export interface KeyValueNumberInterface {
  [key: string]: number | undefined;
}

export interface KeyValueStringInterface {
  [key: string]: string | undefined;
}
