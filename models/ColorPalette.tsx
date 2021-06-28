export interface Color {
  rgb: Array<number>,
  hex: string,
  hsv: Array<number>,
}

export interface ColorPalette {
  colors: Array<Array<Color>>
}