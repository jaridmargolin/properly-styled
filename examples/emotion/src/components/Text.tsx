/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import * as React from "react";
import styled from "@emotion/styled";

// properly-styled
import { compose, GetStyleProps } from "@properly-styled/core";
import {
  coloringStyles,
  spacingStyles,
  typographyStyles
} from "@properly-styled/categories";

// lib
import { font } from "../utils/variants";
import { GetProps } from "../utils/types";

/* -----------------------------------------------------------------------------
 * Text
 * -------------------------------------------------------------------------- */

const textStyles = compose(
  font,
  coloringStyles,
  spacingStyles,
  typographyStyles
);

const StyledText = styled.p<GetStyleProps<typeof textStyles>>(textStyles);

export type TextProps = GetProps<typeof StyledText>;
const Text = (props: TextProps) => (
  <StyledText marginTop="0" marginBottom="0" {...props} />
);

export default Text;
