import React, { useState, useEffect } from 'react';
import { greekLetters } from '../data/Globals';
import { Color, ColorPalette } from '../models/ColorPalette';
import { NumericInput } from './NumericInput';

export const Header = ({ generator }: { generator: CallableFunction; }) => {

  const [amountOfColors, setAmountOfColors] = useState<number>(3);
  const [amountOfVariations, setAmountOfVariations] = useState<number>(11);
  const [colorPalette, setColorPalette] = useState<ColorPalette>();

  const generatePalette = (): void => {
    const palette: ColorPalette = generator(amountOfColors, amountOfVariations);
    setColorPalette(palette);
  };

  const downloadTextToFile = (content: string, extension: string) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `colorPalette.${extension}`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const convertPaletteToCSS = (): string => {
    let css_string = ":root {\n";

    colorPalette?.colors.map((colors: Array<Color>, colorIdx: number) => {
      colors.map((color: Color, variationIdx: number) => {
        css_string += `\t--color-${greekLetters[colorIdx % greekLetters.length]}-${(variationIdx + 1) * 100}: ${color.hex};\n`;
      });

      css_string += (colorIdx < colorPalette?.colors.length - 1) ? "\n" : "";
    });

    css_string += "}";
    return css_string;
  };

  const convertPaletteToSCSS = (): string => {
    let scss_string = "";

    colorPalette?.colors.map((colors: Array<Color>, colorIdx: number) => {
      scss_string += `$color-${greekLetters[colorIdx % greekLetters.length]}: (\n`;
      colors.map((color: Color, variationIdx: number) => {
        scss_string += `\t'${(variationIdx + 1) * 100}': ${color.hex},\n`;
      });

      scss_string += (colorIdx < colorPalette?.colors.length - 1) ? ");\n\n" : ");";
    });

    return scss_string;
  };

  const formatListForCSV = (list: Array<number>, decimals: number): string => {
    return list.map((v: number) => v.toFixed(decimals)).join(",");
  };

  const convertPaletteToCSV = (): string => {
    let csv = 'colorIndex,hex,hue,saturation,lightness,red,green,blue\n';

    colorPalette?.colors.map((colors: Array<Color>, colorIdx: number) => {
      colors.map((color: Color) => {
        csv += `${colorIdx},${color.hex},${formatListForCSV(color.hsl, 2)},${formatListForCSV(color.rgb, 0)}\n`;
      });
    });

    return csv;
  };

  const exportPalette = (): void => {
    downloadTextToFile(convertPaletteToCSS(), "css");
    downloadTextToFile(convertPaletteToSCSS(), "scss");
    downloadTextToFile(convertPaletteToCSV(), "csv");
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
      <div className="c-header__label">
        {colorPalette?.scheme}
      </div>
      <div className="c-header__buttons">
        <input className="c-input" type="button" value="Generate" onClick={generatePalette} />
        <input className="c-input" type="button" value="Export" onClick={exportPalette} />
      </div>
    </header>
  );
};
