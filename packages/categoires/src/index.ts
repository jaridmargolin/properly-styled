/* eslint-disable sort-keys */
/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// properly-styled
import { compose } from '@properly-styled/core'
import {
  alignContent,
  alignItems,
  alignSelf,
  background,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  bg,
  border,
  borderBottom,
  borderColor,
  borderLeft,
  borderRadius,
  borderRight,
  borderStyle,
  borderTop,
  borderWidth,
  bottom,
  boxShadow,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  letterSpacing,
  lineHeight,
  m,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  maxHeight,
  maxWidth,
  mb,
  minHeight,
  minWidth,
  ml,
  mr,
  mt,
  opacity,
  order,
  overflowX,
  overflowY,
  p,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  pb,
  pl,
  position,
  pr,
  pt,
  right,
  textAlign,
  textColor,
  textTransform,
  top,
  verticalAlign,
  whiteSpace,
  width,
  wordBreak,
  zIndex
} from '@properly-styled/styles'

/* -----------------------------------------------------------------------------
 * categories
 * -------------------------------------------------------------------------- */

// position
export const positioningStyles = compose(
  position,
  top,
  right,
  bottom,
  left,
  zIndex
)

// layout
export const layoutStyles = compose(
  display,
  overflowX,
  overflowY,
  verticalAlign
)

// space
export const spacingStyles = compose(
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  m,
  mt,
  mb,
  ml,
  mr,
  p,
  pt,
  pb,
  pl,
  pr
)

// size
export const sizingStyles = compose(
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight
)

// color
export const coloringStyles = compose(
  textColor,
  backgroundColor,
  opacity,
  bg
)

// flex item
export const flexItemStyles = compose(
  flex,
  justifySelf,
  alignSelf,
  order
)

// flex container
export const flexContainerStyles = compose(
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems
)

// typography
export const typographyStyles = compose(
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  textTransform,
  whiteSpace,
  wordBreak,
  lineHeight,
  letterSpacing
)

// borders
export const borderStyles = compose(
  border,
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  boxShadow
)

// backgrounds
export const backgroundStyles = compose(
  background,
  backgroundImage,
  backgroundSize,
  backgroundRepeat,
  backgroundPosition
)
