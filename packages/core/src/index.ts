/* eslint-disable indent */

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

import { CombineObjects, GetKey, UnionToIntersection } from 'simplytyped'

/* -----------------------------------------------------------------------------
 * type utils
 * -------------------------------------------------------------------------- */

type ThemeKeys = KnownKeys<Theme> extends never ? string : KnownKeys<Theme>
type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K
} extends { [_ in keyof T]: infer U }
  ? U
  : never

export type GetStyleProps<GenerateFn extends (...args: any) => any> = GetKey<
  GenerateFn,
  'props'
>

/* -----------------------------------------------------------------------------
 * types
 * -------------------------------------------------------------------------- */

export type ValidIndex = number | string

export interface Theme {
  [key: string]: Scale | undefined
}

export type ThemeProps = { theme: Theme }

// `CombineObjects` is a workaround for:
// https://github.com/Microsoft/TypeScript/issues/22255#issue-301276195
export type WithTheme<StyleProps extends object> = CombineObjects<
  ThemeProps,
  StyleProps
>

export type Scale<Value = any> = Record<string, Value>

export type Breakpoints<Value> = Theme['breakpoints'] extends Scale
  ? { [k in keyof Theme['breakpoints']]?: Value }
  : never

export type ResponsiveValue<Value> = Value | Breakpoints<Value>

export type Prop<RuleValue, PropKey extends string, ThemeKey extends string> = {
  [k in PropKey]?: PropValue<RuleValue, ThemeKey>
}

export type PropValue<RuleValue, ThemeKey extends string> = ResponsiveValue<
  PropInput<RuleValue, ThemeKey>
>

export type PropInput<
  RuleValue,
  ThemeKey extends string
> = Theme[ThemeKey] extends Scale
  ? Extract<keyof Theme[ThemeKey], string>
  : RuleValue

export type Rule<RuleValue> = Record<string, RuleValue>
export type MediaRule<RuleValue> = Record<string, Rule<RuleValue>>
export type Rules<RuleValue> = null | Rule<RuleValue> | MediaRule<RuleValue>

/* -----------------------------------------------------------------------------
 * utils
 * -------------------------------------------------------------------------- */

export const is = (val: any) => val !== undefined && val !== null
export const getScaleValue = (propValue: ValidIndex, scale?: Scale) => {
  const scaleValue = scale && scale[propValue]
  return is(scaleValue) ? scaleValue : propValue
}

/* -----------------------------------------------------------------------------
 * style
 * -------------------------------------------------------------------------- */

const generateStyles = <RuleValue, ThemeKey extends string>(
  propValue: PropValue<RuleValue, ThemeKey>,
  theme: Theme,
  generateFn: (value: ValidIndex) => Rule<RuleValue>
) => {
  if (!is(propValue)) {
    return null
  }

  if (typeof propValue !== 'object') {
    return generateFn(propValue as ValidIndex)
  }

  const { breakpoints } = theme
  if (!breakpoints) {
    throw new Error(
      'You must define theme.breakpoints in order to use responsive prop values'
    )
  }

  const propBreakpoints = Object.entries(propValue) as Array<
    [keyof Breakpoints<string>, PropInput<RuleValue, ThemeKey>]
  >

  const breakpointStyles: MediaRule<RuleValue> = {}
  propBreakpoints.forEach(([key, breakpointValue]) => {
    const mediaQuery = `@media screen and (min-width: ${breakpoints[key]})`

    if (typeof breakpointValue !== 'undefined') {
      breakpointStyles[mediaQuery] = generateFn(breakpointValue as ValidIndex)
    }
  })

  return breakpointStyles
}

/* -----------------------------------------------------------------------------
 * style
 * -------------------------------------------------------------------------- */

export interface StyleOptions<RuleValue, PropKey, ThemeKey> {
  prop: PropKey
  cssProperty?: string
  key?: ThemeKey
  transformValue?: (value: ValidIndex, scale?: Scale) => RuleValue
}

export interface Style<
  RuleValue,
  PropKey extends string,
  ThemeKey extends string
> {
  (props: WithTheme<Prop<RuleValue, PropKey, ThemeKey>>): Rules<RuleValue>
  props: Prop<RuleValue, PropKey, ThemeKey>
  prop: string
  [k: string]: any
}

export const style = <
  RuleValue,
  PropKey extends string,
  ThemeKey extends string
>({
  prop,
  key,
  cssProperty = prop,
  transformValue = getScaleValue
}: StyleOptions<RuleValue, PropKey, ThemeKey>) => {
  const generate: Style<RuleValue, PropKey, ThemeKey> = ({
    theme,
    ...rest
  }) => {
    const propValue = (rest as Record<string, any>)[prop]

    return generateStyles<RuleValue, ThemeKey>(propValue, theme, (val) => ({
      [cssProperty]: transformValue(val, key ? theme[key] : undefined)
    }))
  }

  // hack to allow easily grabbing props Type from Style
  generate.props = undefined as any

  generate.prop = prop
  return generate
}

/* -----------------------------------------------------------------------------
 * variant
 * -------------------------------------------------------------------------- */

export interface VariantOptions<PropKey, ThemeKey> {
  prop: PropKey
  key: ThemeKey
}

export interface Variant<PropKey extends string, ThemeKey extends string> {
  (props: WithTheme<Prop<any, PropKey, ThemeKey>>): Rules<any>
  props: Prop<any, PropKey, ThemeKey>
  prop: string
  [k: string]: any
}

export const variant = <PropKey extends string, ThemeKey extends ThemeKeys>({
  key,
  prop
}: VariantOptions<PropKey, ThemeKey>) => {
  const generate: Variant<PropKey, ThemeKey> = ({ theme, ...rest }) => {
    const value = (rest as Record<string, any>)[prop]

    return generateStyles<any, ThemeKey>(value, theme, (val) => ({
      ...getScaleValue(val, key ? theme[key] : undefined)
    }))
  }

  // hack to allow easily grabbing props Type from Variant
  generate.props = undefined as any

  generate.prop = prop
  return generate
}

/* -----------------------------------------------------------------------------
 * componentVariant
 * -------------------------------------------------------------------------- */

export type ComponentProp<PropKey extends string, Variants> = {
  [k in PropKey]?: ComponentPropValue<Variants>
}

export type ComponentPropValue<Variants> = ResponsiveValue<
  Extract<keyof Variants, string>
>

export interface ComponentVariantOptions<PropKey, Variants> {
  prop: PropKey
  variants: Variants
}

export interface ComponentVariant<PropKey extends string, Variants> {
  (props: WithTheme<ComponentProp<PropKey, Variants>>): Rules<any>
  props: ComponentProp<PropKey, Variants>
  prop: string
  [k: string]: any
}

export const componentVariant = <
  PropKey extends string,
  Variants extends { [key: string]: any }
>({
  prop,
  variants
}: ComponentVariantOptions<PropKey, Variants>) => {
  const generate: ComponentVariant<PropKey, Variants> = ({
    theme,
    ...rest
  }) => {
    const value = (rest as Record<string, any>)[prop]

    return generateStyles<any, string>(value, theme, (val) => {
      if (typeof variants[val] === 'function') {
        return variants[val]({ theme, ...rest })
      } else {
        return variants[val]
      }
    })
  }

  // hack to allow easily grabbing props Type from Variant
  generate.props = undefined as any

  generate.prop = prop
  return generate
}

/* -----------------------------------------------------------------------------
 * compose
 * -------------------------------------------------------------------------- */

export type Styles = Map<string, Style<any, any, any>>
export type Generator = Style<any, any, any> | Group<any>
export type GetComposedProps<GroupType> = UnionToIntersection<
  MapToStyleProps<GroupType>
>
export type MapToStyleProps<U> = U extends (...args: any) => any
  ? GetStyleProps<U>
  : never

export interface Group<Generators extends any[]> {
  (props: WithTheme<GetComposedProps<Generators[number]>>): Rules<any>
  props: GetComposedProps<Generators[number]>
  styles: Styles
  [k: string]: any
}

export const isStyle = (
  generator: Generator
): generator is Style<any, any, any> =>
  (generator as Style<any, any, any>).prop !== undefined

export const isGroup = (generator: Generator): generator is Group<any> =>
  (generator as Group<any>).styles !== undefined

export const compose = <Generators extends any[]>(
  ...generators: Generators
) => {
  const styles: Styles = new Map()
  generators.forEach((generator) => {
    if (isStyle(generator)) {
      styles.set(generator.prop, generator)
    } else if (isGroup(generator)) {
      generator.styles.forEach((style, prop) => styles.set(prop, style))
    }
  })

  const generate: Group<Generators> = (props) =>
    Object.keys(props)
      .map((prop) => {
        const generateFn = styles.get(prop)
        return generateFn ? generateFn(props) : false
      })
      .filter(Boolean)

  // hack to allow easily grabbing props Type from Group
  generate.props = undefined as any

  generate.styles = styles
  return generate
}
