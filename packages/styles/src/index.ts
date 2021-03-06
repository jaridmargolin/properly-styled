/* eslint-disable sort-keys */
/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import * as CSS from 'csstype'

// properly-styled
import { style } from '@properly-styled/core'

/* -----------------------------------------------------------------------------
 * styles
 * -------------------------------------------------------------------------- */

type TLength = string | 0

// position
export const position = style<CSS.PositionProperty, 'position', string>({
  prop: 'position'
})
export const top = style<CSS.TopProperty<TLength>, 'top', string>({
  prop: 'top'
})
export const right = style<CSS.RightProperty<TLength>, 'right', string>({
  prop: 'right'
})
export const bottom = style<CSS.BottomProperty<TLength>, 'bottom', string>({
  prop: 'bottom'
})
export const left = style<CSS.LeftProperty<TLength>, 'left', string>({
  prop: 'left'
})
export const zIndex = style<CSS.ZIndexProperty, 'zIndex', 'zIndices'>({
  prop: 'zIndex',
  key: 'zIndices'
})

// layout
export const display = style<CSS.DisplayProperty, 'display', string>({
  prop: 'display'
})
export const overflowX = style<CSS.OverflowXProperty, 'overflowX', string>({
  prop: 'overflowX'
})
export const overflowY = style<CSS.OverflowXProperty, 'overflowY', string>({
  prop: 'overflowY'
})
export const verticalAlign = style<
CSS.VerticalAlignProperty<TLength>,
'verticalAlign',
string
>({
  prop: 'verticalAlign'
})

// space
export const margin = style<CSS.MarginProperty<TLength>, 'margin', 'spaces'>({
  prop: 'margin',
  key: 'spaces'
})
export const marginTop = style<
CSS.MarginTopProperty<TLength>,
'marginTop',
'spaces'
>({
  prop: 'marginTop',
  key: 'spaces'
})
export const marginBottom = style<
CSS.MarginBottomProperty<TLength>,
'marginBottom',
'spaces'
>({
  prop: 'marginBottom',
  key: 'spaces'
})
export const marginLeft = style<
CSS.MarginLeftProperty<TLength>,
'marginLeft',
'spaces'
>({
  prop: 'marginLeft',
  key: 'spaces'
})
export const marginRight = style<
CSS.MarginRightProperty<TLength>,
'marginRight',
'spaces'
>({
  prop: 'marginRight',
  key: 'spaces'
})
export const padding = style<CSS.PaddingProperty<TLength>, 'padding', 'spaces'>(
  {
    prop: 'padding',
    key: 'spaces'
  }
)
export const paddingTop = style<
CSS.PaddingTopProperty<TLength>,
'paddingTop',
'spaces'
>({
  prop: 'paddingTop',
  key: 'spaces'
})
export const paddingBottom = style<
CSS.PaddingBottomProperty<TLength>,
'paddingBottom',
'spaces'
>({
  prop: 'paddingBottom',
  key: 'spaces'
})
export const paddingLeft = style<
CSS.PaddingLeftProperty<TLength>,
'paddingLeft',
'spaces'
>({
  prop: 'paddingLeft',
  key: 'spaces'
})
export const paddingRight = style<
CSS.PaddingRightProperty<TLength>,
'paddingRight',
'spaces'
>({
  prop: 'paddingRight',
  key: 'spaces'
})

// space aliases
export const m = style<CSS.MarginProperty<TLength>, 'm', 'spaces'>({
  prop: 'm',
  cssProperty: 'margin',
  key: 'spaces'
})
export const mt = style<CSS.MarginTopProperty<TLength>, 'mt', 'spaces'>({
  prop: 'mt',
  cssProperty: 'marginTop',
  key: 'spaces'
})
export const mb = style<CSS.MarginBottomProperty<TLength>, 'mb', 'spaces'>({
  prop: 'mb',
  cssProperty: 'marginBottom',
  key: 'spaces'
})
export const ml = style<CSS.MarginLeftProperty<TLength>, 'ml', 'spaces'>({
  prop: 'ml',
  cssProperty: 'marginLeft',
  key: 'spaces'
})
export const mr = style<CSS.MarginRightProperty<TLength>, 'mr', 'spaces'>({
  prop: 'mr',
  cssProperty: 'marginRight',
  key: 'spaces'
})
export const p = style<CSS.PaddingProperty<TLength>, 'p', 'spaces'>({
  prop: 'p',
  cssProperty: 'padding',
  key: 'spaces'
})
export const pt = style<CSS.PaddingTopProperty<TLength>, 'pt', 'spaces'>({
  prop: 'pt',
  cssProperty: 'paddingTop',
  key: 'spaces'
})
export const pb = style<CSS.PaddingBottomProperty<TLength>, 'pb', 'spaces'>({
  prop: 'pb',
  cssProperty: 'paddingBottom',
  key: 'spaces'
})
export const pl = style<CSS.PaddingLeftProperty<TLength>, 'pl', 'spaces'>({
  prop: 'pl',
  cssProperty: 'paddingLeft',
  key: 'spaces'
})
export const pr = style<CSS.PaddingRightProperty<TLength>, 'pr', 'spaces'>({
  prop: 'pr',
  cssProperty: 'paddingRight',
  key: 'spaces'
})

// size
export const width = style<CSS.WidthProperty<TLength>, 'width', 'widths'>({
  prop: 'width',
  key: 'widths'
})
export const maxWidth = style<
CSS.MaxWidthProperty<TLength>,
'maxWidth',
'maxWidths'
>({
  prop: 'maxWidth',
  key: 'maxWidths'
})
export const minWidth = style<
CSS.MinWidthProperty<TLength>,
'minWidth',
'minWidths'
>({
  prop: 'minWidth',
  key: 'minWidths'
})
export const height = style<CSS.HeightProperty<TLength>, 'height', 'heights'>({
  prop: 'height',
  key: 'heights'
})
export const maxHeight = style<
CSS.MaxHeightProperty<TLength>,
'maxHeight',
'maxHeights'
>({
  prop: 'maxHeight',
  key: 'maxHeights'
})
export const minHeight = style<
CSS.MinHeightProperty<TLength>,
'minHeight',
'minHeights'
>({
  prop: 'minHeight',
  key: 'minHeights'
})

// grid container
export const grid = style<CSS.GridProperty, 'grid', string>({
  prop: 'grid'
})
export const gridTemplateColumns = style<
CSS.GridTemplateColumnsProperty<TLength>,
'gridTemplateColumns',
string
>({
  prop: 'gridTemplateColumns'
})
export const gridTemplateRows = style<
CSS.GridTemplateRowsProperty<TLength>,
'gridTemplateRows',
string
>({
  prop: 'gridTemplateRows'
})
export const gridTemplateAreas = style<
CSS.GridTemplateAreasProperty,
'gridTemplateAreas',
string
>({
  prop: 'gridTemplateAreas'
})
export const gridTemplate = style<
CSS.GridTemplateProperty,
'gridTemplate',
string
>({
  prop: 'gridTemplate'
})
export const gridColumnGap = style<
CSS.GridColumnGapProperty<TLength>,
'gridColumnGap',
'spaces'
>({
  prop: 'gridColumnGap',
  key: 'spaces'
})
export const gridRowGap = style<
CSS.GridRowGapProperty<TLength>,
'gridRowGap',
'spaces'
>({
  prop: 'gridRowGap',
  key: 'spaces'
})
export const gridGap = style<CSS.GridGapProperty<TLength>, 'gridGap', 'spaces'>(
  {
    prop: 'gridGap',
    key: 'spaces'
  }
)
export const gridAutoColumns = style<
CSS.GridAutoColumnsProperty<TLength>,
'gridAutoColumns',
string
>({
  prop: 'gridAutoColumns'
})
export const gridAutoRows = style<
CSS.GridAutoRowsProperty<TLength>,
'gridAutoRows',
string
>({
  prop: 'gridAutoRows'
})
export const gridAutoFlow = style<
CSS.GridAutoFlowProperty,
'gridAutoFlow',
string
>({
  prop: 'gridAutoFlow'
})

// grid item
export const gridColumnStart = style<
CSS.GridColumnStartProperty,
'gridColumnStart',
string
>({
  prop: 'gridColumnStart'
})
export const gridColumnEnd = style<
CSS.GridColumnEndProperty,
'gridColumnEnd',
string
>({
  prop: 'gridColumnEnd'
})
export const gridRowStart = style<
CSS.GridRowStartProperty,
'gridRowStart',
string
>({
  prop: 'gridRowStart'
})
export const gridRowEnd = style<CSS.GridRowEndProperty, 'gridRowEnd', string>({
  prop: 'gridRowEnd'
})
export const gridColumn = style<CSS.GridColumnProperty, 'gridColumn', string>({
  prop: 'gridColumn'
})
export const gridRow = style<CSS.GridRowProperty, 'gridRow', string>({
  prop: 'gridRow'
})
export const gridArea = style<CSS.GridAreaProperty, 'gridArea', string>({
  prop: 'gridArea'
})

// flex container
export const flexBasis = style<
CSS.FlexBasisProperty<TLength>,
'flexBasis',
string
>({
  prop: 'flexBasis'
})
export const flexDirection = style<
CSS.FlexDirectionProperty,
'flexDirection',
string
>({
  prop: 'flexDirection'
})
export const flexWrap = style<CSS.FlexWrapProperty, 'flexWrap', string>({
  prop: 'flexWrap'
})

// flex item
export const flex = style<CSS.FlexProperty<TLength>, 'flex', string>({
  prop: 'flex'
})
export const order = style<CSS.GlobalsNumber, 'order', string>({
  prop: 'order'
})

// align container
export const alignContent = style<
CSS.AlignContentProperty,
'alignContent',
string
>({
  prop: 'alignContent'
})
export const alignItems = style<CSS.AlignItemsProperty, 'alignItems', string>({
  prop: 'alignItems'
})
export const justifyContent = style<
CSS.JustifyContentProperty,
'justifyContent',
string
>({
  prop: 'justifyContent'
})
export const justifyItems = style<
CSS.JustifyItemsProperty,
'justifyItems',
string
>({
  prop: 'justifyItems'
})
export const placeContent = style<
CSS.PlaceContentProperty,
'placeContent',
string
>({
  prop: 'placeContent'
})
export const placeItems = style<CSS.PlaceItemsProperty, 'placeItems', string>({
  prop: 'placeItems'
})

// align items
export const justifySelf = style<
CSS.JustifySelfProperty,
'justifySelf',
string
>({
  prop: 'justifySelf'
})
export const alignSelf = style<CSS.AlignSelfProperty, 'alignSelf', string>({
  prop: 'alignSelf'
})
export const placeSelf = style<CSS.PlaceSelfProperty, 'placeSelf', string>({
  prop: 'placeSelf'
})

// color
export const textColor = style<CSS.ColorProperty, 'textColor', 'colors'>({
  prop: 'textColor',
  cssProperty: 'color',
  key: 'colors'
})
export const backgroundColor = style<
CSS.BackgroundColorProperty,
'backgroundColor',
'colors'
>({
  prop: 'backgroundColor',
  key: 'colors'
})
export const opacity = style<CSS.GlobalsNumber, 'opacity', string>({
  prop: 'opacity'
})

// color aliases
export const bg = style<CSS.BackgroundColorProperty, 'bg', 'colors'>({
  prop: 'bg',
  cssProperty: 'backgroundColor',
  key: 'colors'
})

// typography
export const fontSize = style<
CSS.FontSizeProperty<TLength>,
'fontSize',
'fontSizes'
>({
  prop: 'fontSize',
  key: 'fontSizes'
})
export const fontFamily = style<
CSS.FontFamilyProperty,
'fontFamily',
'fontFamilies'
>({
  prop: 'fontFamily',
  key: 'fontFamilies'
})
export const fontWeight = style<
CSS.FontWeightProperty,
'fontWeight',
'fontWeights'
>({
  prop: 'fontWeight',
  key: 'fontWeights'
})
export const fontStyle = style<CSS.FontStyleProperty, 'fontStyle', string>({
  prop: 'fontStyle'
})
export const textAlign = style<CSS.TextAlignProperty, 'textAlign', string>({
  prop: 'textAlign'
})
export const textTransform = style<
CSS.TextTransformProperty,
'textTransform',
string
>({
  prop: 'textTransform'
})
export const whiteSpace = style<CSS.WhiteSpaceProperty, 'whiteSpace', string>({
  prop: 'whiteSpace'
})
export const wordBreak = style<CSS.WordBreakProperty, 'wordBreak', string>({
  prop: 'wordBreak'
})
export const lineHeight = style<
CSS.LineHeightProperty<TLength>,
'lineHeight',
'lineHeights'
>({
  prop: 'lineHeight',
  key: 'lineHeights'
})
export const letterSpacing = style<
CSS.LetterSpacingProperty<TLength>,
'letterSpacing',
'letterSpacings'
>({
  prop: 'letterSpacing',
  key: 'letterSpacings'
})

// borders
export const border = style<CSS.BorderProperty<TLength>, 'border', 'borders'>({
  prop: 'border',
  key: 'borders'
})
export const borderWidth = style<
CSS.BorderWidthProperty<TLength>,
'borderWidth',
'borderWidths'
>({
  prop: 'borderWidth',
  key: 'borderWidths'
})
export const borderStyle = style<
CSS.BorderStyleProperty,
'borderStyle',
'borderStyles'
>({
  prop: 'borderStyle',
  key: 'borderStyles'
})
export const borderColor = style<
CSS.BorderColorProperty,
'borderColor',
'colors'
>({
  prop: 'borderColor',
  key: 'colors'
})
export const borderTop = style<
CSS.BorderTopProperty<TLength>,
'borderTop',
'borders'
>({
  prop: 'borderTop',
  key: 'borders'
})
export const borderRight = style<
CSS.BorderRightProperty<TLength>,
'borderRight',
'borders'
>({
  prop: 'borderRight',
  key: 'borders'
})
export const borderBottom = style<
CSS.BorderBottomProperty<TLength>,
'borderBottom',
'borders'
>({
  prop: 'borderBottom',
  key: 'borders'
})
export const borderLeft = style<
CSS.BorderLeftProperty<TLength>,
'borderLeft',
'borders'
>({
  prop: 'borderLeft',
  key: 'borders'
})
export const borderRadius = style<
CSS.BorderRadiusProperty<TLength>,
'borderRadius',
'radii'
>({
  prop: 'borderRadius',
  key: 'radii'
})
export const boxShadow = style<CSS.BoxShadowProperty, 'boxShadow', 'shadows'>({
  prop: 'boxShadow',
  key: 'shadows'
})

// backgrounds
export const background = style<
CSS.BackgroundProperty<TLength>,
'background',
string
>({
  prop: 'background'
})
export const backgroundImage = style<
CSS.BackgroundImageProperty,
'backgroundImage',
string
>({
  prop: 'backgroundImage'
})
export const backgroundSize = style<
CSS.BackgroundSizeProperty<TLength>,
'backgroundSize',
string
>({
  prop: 'backgroundSize'
})
export const backgroundRepeat = style<
CSS.BackgroundRepeatProperty,
'backgroundRepeat',
string
>({
  prop: 'backgroundRepeat'
})
export const backgroundPosition = style<
CSS.BackgroundPositionProperty<TLength>,
'backgroundPosition',
string
>({
  prop: 'backgroundPosition'
})
