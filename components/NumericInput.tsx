import React, { FormEvent } from 'react';

export const NumericInput = ({ label, value, setter, trigger }: { label: string; value: number; setter: any; trigger: VoidFunction }) => {
  return (
    <div className="c-numeric-input">
      <label className="c-numeric-input__label" htmlFor="label">{label} : </label>
      <input className="c-input c-numeric-input__input" type="number" name={label} id={label} value={value} onChange={(e : FormEvent) => {
        setter(Math.max(1, +(e.target as HTMLTextAreaElement).value));
        trigger();
      }} />
    </div>
  );
};
