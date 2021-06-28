export interface Color {
  rgb: Array<number>,
  hex: string,
  hsl: Array<number>,
}

export interface ColorPalette {
  colors: Array<Array<Color>>
}