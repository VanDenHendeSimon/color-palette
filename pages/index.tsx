import { useState } from 'react';
import { ColorVisualiser } from '../components/ColorVisualiser';
import { Header } from '../components/Header';
import { SEO } from '../components/SEO';
import { Color, ColorPalette } from '../models/ColorPalette';

export default function Index() {

  const [colorPalette, setColorPalette] = useState<ColorPalette>({
    colors: [
      [
        {
          hex: "#FF0000",
          hsl: [0, 1, 1],
          rgb: [255, 0, 0],
        },
        {
          hex: "#00FF00",
          hsl: [30, 1, 1],
          rgb: [0, 255, 0],
        },
        {
          hex: "#0000FF",
          hsl: [90, 1, 1],
          rgb: [0, 0, 255],
        },
      ],
      [
        {
          hex: "#550000",
          hsl: [0, 1, 1],
          rgb: [255, 0, 0],
        },
        {
          hex: "#005500",
          hsl: [30, 1, 1],
          rgb: [0, 255, 0],
        },
        {
          hex: "#000055",
          hsl: [90, 1, 1],
          rgb: [0, 0, 255],
        },
      ],
    ]
  });

  const lightnessRange = [0.1, 0.9];
  const saturationRange = [0.3, 1];

  const getRandomColor = () : Color => {
    return {
      hex: "#FF0000",
      hsl: [0, 1, 1],
      rgb: [255, 0, 0]
    }
  }

  const convertHSLtoColor = (h: number, s: number, l: number) : Color => {
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
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
  }

  const getVariations = (color: Color, amount: number) : Array<Color> => {
    let variations : Array<Color> = [];
    for(let i=0; i<amount; i++) {
      const lightnessBucket = [
        lightnessRange[0] + ((lightnessRange[1] - lightnessRange[0]) / amount * i),
        lightnessRange[0] + ((lightnessRange[1] - lightnessRange[0]) / amount * (i+1)),
      ]

      const saturationBucket = [
        saturationRange[0] + ((saturationRange[1] - saturationRange[0]) / amount * i),
        saturationRange[0] + ((saturationRange[1] - saturationRange[0]) / amount * (i+1)),
      ]

      variations.push(convertHSLtoColor(
        color.hsl[0],
        lightnessBucket[0],
        saturationBucket[0],
      ));
    }

    return variations;
  }

  const generatePalette = (amountOfColors: number, amountOfVariations: number) : void => {
    console.log(`Generating Color Palette with ${amountOfColors} colors each having ${amountOfVariations} variations`);

    const initialColor = getRandomColor();
    const variations = getVariations(initialColor, amountOfVariations);

    let newPalette : ColorPalette = {colors: [variations, variations, variations]};
    setColorPalette(newPalette);
  }

  return (
    <div className="c-app">
      <SEO titleSuffix={"| 🏡"} />
      <Header generator={generatePalette} />
      <ColorVisualiser colorPalette={colorPalette} />
    </div>
  );
}
