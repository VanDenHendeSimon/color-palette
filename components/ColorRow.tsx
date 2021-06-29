import React, { useState } from 'react';
import { Color } from '../models/ColorPalette';

export const ColorRow = ({ colorSet }: { colorSet: Array<Color>; }) => {
  const [isCopiedVisible, setIsCopiedVisible] = useState<boolean>(false);
  const [coptiedItem, setCopiedItem] = useState<number>(-1);

  return (
    <div className="c-colorvisualiser__row">
      {
        colorSet.map((color: Color, idx: number) => {
          return (
            <div onClick={async () => {
              navigator.clipboard.writeText(color.hex);
              setIsCopiedVisible(true);
              setCopiedItem(idx);

              await new Promise(resolve => setTimeout(resolve, 1000));
              setIsCopiedVisible(false);
              setCopiedItem(-1);
            }}
              className="c-colorvisualiser__col" key={idx} style={{
                backgroundColor: color.hex
              }}>
              <p className={
                `c-colorvisualiser__text c-colorvisualiser__popup u-noselect ${(isCopiedVisible && coptiedItem === idx) ? "c-colorvisualiser__popup--show" : ""
                }`
              }>Copied!</p>
              <p className="c-colorvisualiser__text c-colorvisualiser__label u-noselect">{color.hex}</p>
            </div>
          );
        })
      }
    </div>
  );
};
