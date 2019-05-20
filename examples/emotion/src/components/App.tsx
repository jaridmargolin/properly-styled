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
    <Text textColor="blue" font="f1" margin="0">
      Properly Styled + Emotion
    </Text>
  </ThemeProvider>
);

export default App;
