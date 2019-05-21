/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import * as React from "react";
import { ThemeProvider } from "emotion-theming";

// lib
import theme from "../theme";
import Text from "./Text";

/* -----------------------------------------------------------------------------
 * App
 * -------------------------------------------------------------------------- */

const App = () => (
  <ThemeProvider theme={theme}>
    <Text textColor="blue">Properly Styled + Emotion</Text>
  </ThemeProvider>
);

export default App;
