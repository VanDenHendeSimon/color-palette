const analogueOffset = 30;

const mod = (n: number, m: number) => {
  const remainder = n % m;
  return remainder >= 0 ? remainder : remainder + m;
};

export const getComplementarySchemeFromColor = (hue: number, amount?: number): Array<number> => {
  // Colors that are opposite each other on the color wheel
  return [
    hue,
    (hue + 180) % 360
  ];
};

export const getAnalogueSchemeFromColor = (hue: number, amount?: number): Array<number> => {
  // Colors that are next to each other on the color wheel

  if (amount === 3 || amount === undefined)
    return [
      mod((hue - analogueOffset), 360),
      hue,
      (hue + analogueOffset) % 360
    ];

  return Array.apply(null, Array(amount)).map((col: any, i: number) => (hue + (analogueOffset * i)) % 360);
};

export const getTriadSchemeFromColor = (hue: number, amount?: number): Array<number> => {
  // Colors that are evenly spaced around the color wheel
  return [
    mod((hue - 120), 360),
    hue,
    (hue + 120) % 360
  ];
};

export const getSplitComplementarySchemeFromColor = (hue: number, amount?: number): Array<number> => {
  // In addition to the base color, it uses the two colors adjacent to its complement
  return [
    (hue + 180 + analogueOffset) % 360,
    hue,
    (hue + 180 - analogueOffset) % 360,
  ];
};

export const getTetradicSchemeFromColor = (hue: number, amount?: number): Array<number> => {
  // Colors arranged into two complementary pairs.
  return [
    (hue + analogueOffset) % 360,
    mod((hue - analogueOffset), 360),
    (hue + 180 + analogueOffset) % 360,
    (hue + 180 - analogueOffset) % 360,
  ];
};

export const getSquareSchemeFromColor = (hue: number, amount?: number): Array<number> => {
  // Colors that are evenly spaced around the color wheel
  return [
    hue,
    (hue + 90) % 360,
    (hue + 180) % 360,
    (hue + 270) % 360,
  ];
};

// https://www.tigercolor.com/color-lab/color-theory/color-harmonies.htm
export const colorHarmonies = [
  {
    "Analogue": getAnalogueSchemeFromColor,
    "Complementary": getComplementarySchemeFromColor
  },
  {
    "Analogue": getAnalogueSchemeFromColor,
    "Split Complementary": getSplitComplementarySchemeFromColor,
    "Triadic": getTriadSchemeFromColor,
  },
  {
    "Analogue": getAnalogueSchemeFromColor,
    "Tetradic": getTetradicSchemeFromColor,
    "Square": getSquareSchemeFromColor,
  }
];