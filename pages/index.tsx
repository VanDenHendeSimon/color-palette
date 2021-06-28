import { useState } from 'react';
import { ColorVisualiser } from '../components/ColorVisualiser';
import { Header } from '../components/Header';
import { SEO } from '../components/SEO';
import { ColorPalette } from '../models/ColorPalette';

export default function Index() {

  const [colorPalette, setColorPalette] = useState<ColorPalette>({
    colors: [
      [
        {
          hex: "#FF0000",
          hsv: [0, 1, 1],
          rgb: [255, 0, 0],
        },
        {
          hex: "#00FF00",
          hsv: [30, 1, 1],
          rgb: [0, 255, 0],
        },
        {
          hex: "#0000FF",
          hsv: [90, 1, 1],
          rgb: [0, 0, 255],
        },
      ],
      [
        {
          hex: "#550000",
          hsv: [0, 1, 1],
          rgb: [255, 0, 0],
        },
        {
          hex: "#005500",
          hsv: [30, 1, 1],
          rgb: [0, 255, 0],
        },
        {
          hex: "#000055",
          hsv: [90, 1, 1],
          rgb: [0, 0, 255],
        },
      ],
    ]
  });

  return (
    <div className="c-app">
      <SEO titleSuffix={"| 🏡"} />
      <Header />
      <ColorVisualiser colorPalette={colorPalette} />
    </div>
  );
}
