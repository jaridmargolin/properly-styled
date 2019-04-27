/* eslint-disable indent */
/* -----------------------------------------------------------------------------
 * type utils
 * -------------------------------------------------------------------------- */

export type MappedIdentity<T> = { [K in keyof T]: T[K] }

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type UnionToIntersection<U> = (U extends any
  ? (k: U) => void
  : never) extends ((k: infer I) => void)
  ? I
  : never

type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K
} extends { [_ in keyof T]: infer U }
  ? U
  : never

type ThemeKeys = KnownKeys<Theme> extends never ? string : KnownKeys<Theme>

export type GetStyleProps<GenerateFn extends (...args: any) => any> = Omit<
  Parameters<GenerateFn>[0],
  'theme'
>

/* -----------------------------------------------------------------------------
 * types
 * -------------------------------------------------------------------------- */

export type ValidIndex = number | string

export interface Theme {
  [key: string]: Scale | undefined
}

// `MappedIdentity` is a workaround for:
// https://github.com/Microsoft/TypeScript/issues/22255#issue-301276195
export type WithTheme<StyleProps> = MappedIdentity<
  {
    theme: Theme
  } & Partial<StyleProps>
>

export type Scale<Value = any> = Record<string, Value>

export type Breakpoints<Value> = Theme['breakpoints'] extends Scale
  ? { [k in keyof Theme['breakpoints']]?: Value }
  : never

export type ResponsiveValue<Value> = Value | Breakpoints<Value>

export type Prop<RuleValue, PropKey extends string, ThemeKey extends string> = {
  [k in PropKey]: PropValue<RuleValue, ThemeKey>
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
export type Rules<RuleValue> = null | Rule<RuleValue> | MediaRule<RuleValue>[]

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

  return propBreakpoints.map<MediaRule<RuleValue>>(([key, breakpointValue]) => {
    const mediaQuery = `@media screen and (min-width: ${breakpoints[key]})`

    return typeof breakpointValue === 'undefined'
      ? {}
      : { [mediaQuery]: generateFn(breakpointValue as ValidIndex) }
  })
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

  generate.styles = styles
  return generate
}
