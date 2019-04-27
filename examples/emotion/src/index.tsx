/* eslint-disable sort-keys */
/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import * as React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

// properly-styled
import { compose, variant, GetStyleProps } from '@properly-styled/core'
import { textColor, fontSize } from '@properly-styled/styles'
import { spacingStyles } from '@properly-styled/categories'

// lib
import theme from './theme'

/* -----------------------------------------------------------------------------
 * test
 * -------------------------------------------------------------------------- */

const font = variant({ prop: 'font', key: 'fonts' })
const textStyles = compose(
  font,
  textColor,
  fontSize,
  spacingStyles
)

const Text = styled.div<GetStyleProps<typeof textStyles>>(textStyles)

const App = () => (
  <ThemeProvider theme={theme}>
    <Text
      textColor='blue'
      font='f1'
      marginLeft={{ desktop: 's2', mobile: '27px' as any }}
      marginRight={'s2'}
    />
  </ThemeProvider>
)

export default App
