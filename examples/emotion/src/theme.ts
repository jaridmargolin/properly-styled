/* -----------------------------------------------------------------------------
 * theme
 * -------------------------------------------------------------------------- */

const theme = {
  breakpoints: {
    default: "0px",
    mobile: "480px",
    desktop: "1024px"
  },
  colors: {
    blue: "rgba(0, 0, 1)",
    red: "rgba(0, 0, 0)"
  },
  fontSizes: {
    s10: "10px",
    s11: "11px"
  },
  spaces: {
    "0": "0px",
    "2": "2px",
    "4": "4px",
    auto: "auto"
  },
  fonts: {
    f1: {
      fontFamily:
        '"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
      fontSize: "12px"
    }
  }
};

declare module "@properly-styled/core" {
  type MyTheme = typeof theme;
  interface Theme extends MyTheme {}
}

export default theme;
