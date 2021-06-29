# Color Palette Toolset
This webapp helps with choosing and implementing color palettes.  
Generate color schemes with the most beautiful harmonies, combinations and relationships.  

Export your palette to any of the following formats so that they can be implemented in your project with ease:
- css
- scss
- csv  

The webapp can be found [here](https://kleurtjes.netlify.app/)  
It was built from scratch using NextJS, ReactJS, TypeScript and SCSS

## Export Examples
### CSS
``` css
:root {
	--color-alpha-100: #21121f;
	--color-alpha-200: #411e3c;
	--color-alpha-300: #63275c;
	--color-alpha-400: #892d7d;
	--color-alpha-500: #b130a1;
	--color-alpha-600: #d438c1;
	--color-alpha-700: #e355d1;
	--color-alpha-800: #ee75df;
	--color-alpha-900: #f798eb;
	--color-alpha-1000: #fcbef5;
	--color-alpha-1100: #ffe7fc;

	--color-beta-100: #211218;
	--color-beta-200: #411e2b;
	--color-beta-300: #63273d;
	--color-beta-400: #892d4f;
	--color-beta-500: #b13060;
	--color-beta-600: #d43873;
	--color-beta-700: #e3558a;
	--color-beta-800: #ee75a3;
	--color-beta-900: #f798bc;
	--color-beta-1000: #fcbed5;
	--color-beta-1100: #ffe7f0;

	--color-gamma-100: #211412;
	--color-gamma-200: #41221e;
	--color-gamma-300: #632e27;
	--color-gamma-400: #89382d;
	--color-gamma-500: #b14030;
	--color-gamma-600: #d44c38;
	--color-gamma-700: #e36755;
	--color-gamma-800: #ee8475;
	--color-gamma-900: #f7a498;
	--color-gamma-1000: #fcc6be;
	--color-gamma-1100: #ffeae7;
}
```

### SCSS
``` scss
$color-alpha: (
	'100': #21121f,
	'200': #411e3c,
	'300': #63275c,
	'400': #892d7d,
	'500': #b130a1,
	'600': #d438c1,
	'700': #e355d1,
	'800': #ee75df,
	'900': #f798eb,
	'1000': #fcbef5,
	'1100': #ffe7fc,
);

$color-beta: (
	'100': #211218,
	'200': #411e2b,
	'300': #63273d,
	'400': #892d4f,
	'500': #b13060,
	'600': #d43873,
	'700': #e3558a,
	'800': #ee75a3,
	'900': #f798bc,
	'1000': #fcbed5,
	'1100': #ffe7f0,
);

$color-gamma: (
	'100': #211412,
	'200': #41221e,
	'300': #632e27,
	'400': #89382d,
	'500': #b14030,
	'600': #d44c38,
	'700': #e36755,
	'800': #ee8475,
	'900': #f7a498,
	'1000': #fcc6be,
	'1100': #ffeae7,
);
```  

## Screenshot
![Screenshot 1](https://kleurtjes.netlify.app/screenshot_1.png)
![Screenshot 2](https://kleurtjes.netlify.app/screenshot_2.png)
