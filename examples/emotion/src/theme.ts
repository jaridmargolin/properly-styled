/* -----------------------------------------------------------------------------
 * theme
 * -------------------------------------------------------------------------- */

const theme = {
  breakpoints: {
    default: '0px',
    mobile: '480px',
    desktop: '1024px'
  },
  colors: {
    blue: 'rgba(0, 0, 1)',
    red: 'rgba(0, 0, 0)'
  },
  fontSizes: {
    s10: '10px',
    s11: '11px'
  },
  spaces: {
    s2: '2px',
    auto: 'auto'
  },
  fonts: {
    f1: {
      fontSize: '11px',
      textTransform: 'uppercase'
    }
  }
}

declare module '@properly-styled/core' {
  type MyTheme = typeof theme
  interface Theme extends MyTheme {}
}

export default theme