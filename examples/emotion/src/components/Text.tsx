/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import * as React from "react";
import styled from "@emotion/styled";

// properly-styled
import { compose } from "@properly-styled/core";
import {
  coloringStyles,
  spacingStyles,
  typographyStyles
} from "@properly-styled/categories";

// lib
import { font } from "../utils/variants";
import { GetProps } from "../utils/types";

/* -----------------------------------------------------------------------------
 * StyledText
 * -------------------------------------------------------------------------- */

const textStyles = compose(
  font,
  coloringStyles,
  spacingStyles,
  typographyStyles
);

const StyledText = styled.p<typeof textStyles["props"]>(textStyles);

/* -----------------------------------------------------------------------------
 * Text
 * -------------------------------------------------------------------------- */

const Text = (props: GetProps<typeof StyledText>) => (
  <StyledText marginTop="0" marginBottom="0" {...props} />
);

export default Text;
