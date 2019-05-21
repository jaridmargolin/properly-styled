/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import * as React from "react";

// properly-styled
import properlyStyled, { PropsOf } from "@properly-styled/emotion";
import {
  coloringStyles,
  spacingStyles,
  typographyStyles
} from "@properly-styled/categories";

// lib
import { font } from "../utils/variants";

/* -----------------------------------------------------------------------------
 * StyledText
 * -------------------------------------------------------------------------- */

const StyledText = properlyStyled("p")(
  font,
  coloringStyles,
  spacingStyles,
  typographyStyles
);

/* -----------------------------------------------------------------------------
 * Text
 * -------------------------------------------------------------------------- */

const Text = (props: PropsOf<typeof StyledText>) => (
  <StyledText mt="0" mb="0" font="s16.normal" {...props} />
);

export default Text;
