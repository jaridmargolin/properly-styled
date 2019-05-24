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
  grid,
  gridArea,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridColumnEnd,
  gridColumnGap,
  gridColumnStart,
  gridGap,
  gridRow,
  gridRowEnd,
  gridRowGap,
  gridRowStart,
  gridTemplate,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
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
  placeContent,
  placeItems,
  placeSelf,
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

// grid container
export const gridContainerStyles = compose(
  grid,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridTemplate,
  gridColumnGap,
  gridRowGap,
  gridGap,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  placeContent,
  placeItems
)

// grid item
export const gridItemStyles = compose(
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,
  gridColumn,
  gridRow,
  gridArea,
  justifySelf,
  alignSelf,
  placeSelf
)

// flex container
export const flexContainerStyles = compose(
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  placeContent,
  placeItems
)

// flex item
export const flexItemStyles = compose(
  flex,
  justifySelf,
  alignSelf,
  placeSelf,
  order
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
