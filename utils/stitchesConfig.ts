import { createStitches, createTheme, PropertyValue } from '@stitches/react';

const stitches = createStitches({
  theme: {
    colors: {
      primary: '#5E81F4',
      danger: '#FF8088',
      lightColor: '#202A25',
      darkColor: '#26F0F1',
      fontColor: 'white',
      disabledBackgroundColor: '#F5F5F5',
      disabledBorderColor: '#D9D9D9',
      disabledFontColor: '#00000040',
    },
    fontSizes: {
      md: '0.875rem',
      rg: '1rem',
    },
    fontWeights: {
      sm: 400,
      rg: 700,
      md: 900,
    },
    fonts: {},
  },
});

export const darkTheme = createTheme({
  colors: {
    bg: '$darkJungleGreen',
    fg: '$darkColor',
  },
});

const injectGlobalStyles = stitches.globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  '*:after': { boxSizing: 'border-box' },
  '*:before': { boxSizing: 'border-box' },
});

injectGlobalStyles();

const { styled, keyframes, ...rest } = stitches;
export { styled, keyframes, PropertyValue, rest };
