import React, { FormEvent, useState } from 'react';
import { NumericInput } from './NumericInput';

export const Header = () => {

  const [amountOfColors, setAmountOfColors] = useState<number>(3);
  const [amountOfVariations, setAmountOfVariations] = useState<number>(11);

  return (
    <header className="c-header">
      <div className="c-header__numeric-inputs">
        <NumericInput value={amountOfColors} label="Colors" setter={setAmountOfColors} />
        <NumericInput value={amountOfVariations} label="Variations" setter={setAmountOfVariations} />
        <input className="c-input" type="button" value="test" onClick={() => {console.log(amountOfColors, amountOfVariations)}} />
      </div>
      <div></div>
      <div></div>
    </header>
  );
};
