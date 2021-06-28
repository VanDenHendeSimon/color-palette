import { useState } from 'react';
import { ColorVisualiser } from '../components/ColorVisualiser';
import { Header } from '../components/Header';
import { SEO } from '../components/SEO';
import { Color, ColorPalette } from '../models/ColorPalette';
import { colorHarmonies, getAnalogueSchemeFromColor } from '../utils/colorSchemes';

export default function Index() {

  const [colorPalette, setColorPalette] = useState<ColorPalette>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const lightnessRange = [0.1, 0.96];
  const saturationRange = [0.3, 1];

  const getRandomColor = (): number => {
    return Math.random() * 360;
  };

  const convertHSLtoColor = (h: number, s: number, l: number): Color => {
    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }

    // Having obtained RGB, convert channels to hex
    let rString = Math.round((r + m) * 255).toString(16).padStart(2, '0');
    let gString = Math.round((g + m) * 255).toString(16).padStart(2, '0');
    let bString = Math.round((b + m) * 255).toString(16).padStart(2, '0');

    return {
      hsl: [h, s, l],
      hex: "#" + rString + gString + bString,
      rgb: [r, g, b]
    };
  };

  const getVariations = (hue: number, amount: number): Array<Color> => {
    let variations: Array<Color> = [];
    for (let i = 0; i < amount; i++) {
      const lightnessBucket = [
        lightnessRange[0] + ((lightnessRange[1] - lightnessRange[0]) / amount * i),
        lightnessRange[0] + ((lightnessRange[1] - lightnessRange[0]) / amount * (i + 1)),
      ];

      const saturationBucket = [
        saturationRange[0] + ((saturationRange[1] - saturationRange[0]) / amount * i),
        saturationRange[0] + ((saturationRange[1] - saturationRange[0]) / amount * (i + 1)),
      ];

      variations.push(convertHSLtoColor(
        hue,
        saturationBucket[0] + (i / amount) * (saturationBucket[1] - saturationBucket[0]),
        lightnessBucket[0] + (i / amount) * (lightnessBucket[1] - lightnessBucket[0]),
      ));
    }

    return variations;
  };

  const getRandomPropertyOfObject = (obj: any) => {
    const keys = Object.keys(obj);
    const randomKey = keys[keys.length * Math.random() << 0];
    console.log(randomKey);

    return obj[randomKey];
  };

  const getColorsFromScheme = (amountOfColors: number) => {
    const possibleSchemes = colorHarmonies[amountOfColors - 2];
    if (possibleSchemes !== undefined) {
      const func = getRandomPropertyOfObject(possibleSchemes);
      return func(getRandomColor(), amountOfColors);
    }

    return getAnalogueSchemeFromColor(getRandomColor(), amountOfColors);
  };

  const generatePalette = (amountOfColors: number, amountOfVariations: number): void => {
    console.log(`Generating Color Palette with ${amountOfColors} colors each having ${amountOfVariations} variations`);

    const colors = getColorsFromScheme(amountOfColors);

    let newPalette: ColorPalette = {
      colors: Array.apply(null, Array(amountOfColors)).map(
        (_: any, i: number) => getVariations(colors && colors[i] ? colors[i] : getRandomColor(), amountOfVariations)
      )
    };

    setColorPalette(newPalette);
    setIsLoading(false);
  };

  return (
    <div className="c-app">
      <SEO titleSuffix={"| 🏡"} />
      <Header generator={generatePalette} />
      {isLoading ? <div>loading...</div> : <ColorVisualiser colorPalette={colorPalette} />}
    </div>
  );
}
