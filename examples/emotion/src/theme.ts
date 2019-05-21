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
    blue: "rgba(49, 110, 232, 1)",
    red: "rgba(232, 49, 49, 1)"
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
    "s16.normal": {
      fontFamily:
        '"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
      fontSize: "16px",
      fontWeight: 400
    }
  }
};

declare module "@properly-styled/core" {
  type MyTheme = typeof theme;
  interface Theme extends MyTheme {}
}

export default theme;
