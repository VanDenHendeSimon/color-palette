import React, { useState, useEffect } from 'react';
import { NumericInput } from './NumericInput';

export const Header = ({ generator }: { generator: CallableFunction; }) => {

  const [amountOfColors, setAmountOfColors] = useState<number>(3);
  const [amountOfVariations, setAmountOfVariations] = useState<number>(11);

  const generatePalette = (): void => {
    generator(amountOfColors, amountOfVariations);
  };

  useEffect(() => {
    generatePalette();
  }, []);

  return (
    <header className="c-header">
      <div className="c-header__numeric-inputs">
        <NumericInput value={amountOfColors} label="Colors" setter={setAmountOfColors} />
        <NumericInput value={amountOfVariations} label="Variations" setter={setAmountOfVariations} />
      </div>
      <div></div>
      <div className="c-header__buttons">
        <input className="c-input" type="button" value="Generate" onClick={generatePalette} />
        <input className="c-input" type="button" value="Export" onClick={() => { console.log("Exporting"); }} />
      </div>
    </header>
  );
};
