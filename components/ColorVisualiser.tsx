import React from 'react';
import { Color, ColorPalette } from '../models/ColorPalette';
import { ColorRow } from './ColorRow';

export const ColorVisualiser = ({ colorPalette }: { colorPalette?: ColorPalette; }) => {
  return (
    <div className="c-colorvisualiser">
      {
        colorPalette ?
        colorPalette.colors.map((colorSet: Array<Color>, idx: number) => <ColorRow key={idx} colorSet={colorSet} />) :
        <p>Please provide a Color Palette.</p>
      }
    </div>
  );
};
