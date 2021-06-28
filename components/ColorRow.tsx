import React from 'react'
import { Color } from '../models/ColorPalette';

export const ColorRow = ({colorSet}: {colorSet: Array<Color>}) => {
  console.log(colorSet);
  return (
    <div className="c-colorvisualiser__row">
      {
        colorSet.map((color: Color, idx: number) => {
          return (
            <div className="c-colorvisualiser__col" key={idx} style={{
              backgroundColor: color.hex
            }}>
              <p className="c-colorvisualiser__label">{color.hex}</p>
            </div>
          )
        })
      }
    </div>
  )
}
