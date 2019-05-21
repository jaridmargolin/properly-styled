/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import styled from '@emotion/styled'
import { StyledComponent } from '@emotion/styled-base/types'

// properly-styled
import { compose } from '@properly-styled/core'

/* -----------------------------------------------------------------------------
 * type helpers
 * -------------------------------------------------------------------------- */

type JSXInEl = JSX.IntrinsicElements

export type PropsOf<
Tag extends React.ComponentType<any>
> = Tag extends React.SFC<infer Props>
  ? Props & React.Attributes
  : Tag extends React.ComponentClass<infer Props>
  ? (Tag extends new (...args: Array<any>) => infer Instance
      ? Props & React.ClassAttributes<Instance>
      : never)
  : never

export type GetAttributes<Tag> = Tag extends React.ComponentType<any>
  ? PropsOf<Tag>
  : Tag extends keyof JSXInEl
  ? JSXInEl[Tag]
  : never

export type Styled<Tag, StyleProps> = StyledComponent<
  GetAttributes<Tag> & { children?: React.ReactNode },
  StyleProps,
  any
>

/* -----------------------------------------------------------------------------
 * properlyStyled
 * -------------------------------------------------------------------------- */

const properlyStyled = <Tag extends React.ComponentType<any> | keyof JSXInEl>(
  tag: Tag
) => <Generators extends any[]>(...generators: Generators) => {
  const composed = compose(...generators)
  const component = styled(tag as any)(composed)

  return component as Styled<Tag, typeof composed['props']>
}

export default properlyStyled
