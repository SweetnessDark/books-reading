export const breakpoints = {
  mob: '320',
  tab: '768',
  desk: '1280',
};

export const theme = {
  colors: {
    white: '#FFFFFF',
    orange: '#FF6B08',
    darkBlue: '#242A37',
    background: '#F6F7FB',
    lightGrey: '#F5F7FA',
    darkGrey: '#898F9F',
    darkLight: '#6D7A8D',
    whiteGray: '#B1B5C2',
  },

  fonts: {
    main: 'Montserrat',
    secondary: 'Roboto',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 36, 48],

  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  lineHeights: [1.2, 1.25, 1.35, 1.36, 1.375, 1.389, 1.5, 1.625, 1.83],

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
  },

  media: {
    phone: '(min-width: 320px)',
    tablet: '(min-width: 780px)',
    desktop: '(min-width: 1280px)',
  },

  mq: {
    mobileOnly: `@media screen and (max-width: ${breakpoints.tab - 0.02}px)`,
    mobile: `@media screen and (min-width: ${breakpoints.mob}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints.tab
    }px) and (max-width: ${breakpoints.desk - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints.tab}px)`,
    notDesktop: `@media screen and (max-width: ${breakpoints.desk - 0.02}px)`,
    desktop: `@media screen and (min-width: ${breakpoints.desk}px)`,
  },
};
