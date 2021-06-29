import React, { useState, useEffect } from 'react';
import { ColorPalette } from '../models/ColorPalette';
import { NumericInput } from './NumericInput';

export const Header = ({ generator }: { generator: CallableFunction; }) => {

  const [amountOfColors, setAmountOfColors] = useState<number>(3);
  const [amountOfVariations, setAmountOfVariations] = useState<number>(11);
  const [scheme, setScheme] = useState<string>("");

  const generatePalette = (): void => {
    const palette: ColorPalette = generator(amountOfColors, amountOfVariations);
    setScheme(palette.scheme);
  };

  const exportPalette = () : void => {
    console.log("Exporting");
  }

  useEffect(() => {
    generatePalette();
  }, []);

  return (
    <header className="c-header">
      <div className="c-header__numeric-inputs">
        <NumericInput value={amountOfColors} label="Colors" setter={setAmountOfColors} />
        <NumericInput value={amountOfVariations} label="Variations" setter={setAmountOfVariations} />
      </div>
      <div className="c-header__label">
        {scheme}
      </div>
      <div className="c-header__buttons">
        <input className="c-input" type="button" value="Generate" onClick={generatePalette} />
        <input className="c-input" type="button" value="Export" onClick={exportPalette} />
      </div>
    </header>
  );
};
