/* eslint-disable sort-keys */
/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// lib
import { compose, style, variant } from './index'

/* -----------------------------------------------------------------------------
 * reusable
 * -------------------------------------------------------------------------- */

const theme = {
  breakpoints: {
    default: '0px',
    mobile: '320px',
    tablet: '768px',
    desktop: '1060px',
    desktop_xl: '1500px'
  },
  spaces: {
    s0: '0px',
    s4: '4px'
  },
  fonts: {
    'f12.400': {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px'
    },
    'f14.600': {
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '16px'
    }
  }
}

declare module './index' {
  type TestTheme = typeof theme
  interface Theme extends TestTheme {}
}

/* -----------------------------------------------------------------------------
 * test
 * -------------------------------------------------------------------------- */

describe('properly-styled', () => {
  describe('style', () => {
    test('returns generate fn with prop property', () => {
      const position = style({ prop: 'position' })

      expect(typeof position).toBe('function')
      expect(position.prop).toBe('position')
    })
  })

  describe('style.generate', () => {
    test('returns null if prop not passed', () => {
      const position = style({ prop: 'position' })
      expect(position({ theme })).toBe(null)
    })

    test('returns passed value', () => {
      const position = style({ prop: 'position' })

      expect(position({ theme, position: 'relative' })).toEqual({
        position: 'relative'
      })
    })

    test('returns value keyed by passed cssProperty', () => {
      const position = style({ prop: 'pos', cssProperty: 'position' })

      expect(position({ theme, pos: 'relative' })).toEqual({
        position: 'relative'
      })
    })

    test('returns value transformed by passed transformValue', () => {
      const transformValue = (val: string | number) => `transformed(${val})`
      const position = style({ prop: 'position', transformValue })

      expect(position({ theme, position: 'relative' })).toEqual({
        position: 'transformed(relative)'
      })
    })

    test('returns value from scale', () => {
      const margin = style({ prop: 'margin', key: 'spaces' })

      expect(margin({ theme, margin: 's0' })).toEqual({
        margin: '0px'
      })
    })

    test('returns passed value if scale not found', () => {
      const position = style({ prop: 'position', key: 'positions' })

      expect(position({ theme, position: 'relative' })).toEqual({
        position: 'relative'
      })
    })

    test('returns responsive values', () => {
      const margin = style({ prop: 'margin', key: 'spaces' })

      const result = margin({
        theme,
        margin: { default: 's0', desktop: 's4' }
      })

      expect(result).toEqual([
        {
          '@media screen and (min-width: 0px)': { margin: '0px' }
        },
        {
          '@media screen and (min-width: 1060px)': { margin: '4px' }
        }
      ])
    })
  })

  describe('compose', () => {
    test('returns generate fn with styles property', () => {
      const position = style({ prop: 'position' })
      const display = style({ prop: 'display' })
      const group = compose(
        position,
        display
      )

      expect(typeof group).toBe('function')
      expect(group.styles.get('position')).toBe(position)
      expect(group.styles.get('display')).toBe(display)
    })
  })

  describe('compose.generate', () => {
    test('returns array of styles', () => {
      const fakeStyle = (options: Record<string, any>) => {
        const generate = (props: Record<string, any>) => {
          generate.callCount += 1
          return { [options.prop]: props[options.prop] }
        }

        generate.prop = options.prop
        generate.callCount = 0
        return generate
      }

      const position = fakeStyle({ prop: 'position' })
      const display = fakeStyle({ prop: 'display' })
      const flex = fakeStyle({ prop: 'flex' })
      const layout = compose(
        position,
        display,
        flex
      )

      const fontSize = fakeStyle({ prop: 'fontSize' })
      const all = compose(
        layout,
        fontSize
      )

      const result = all({
        theme,
        fontSize: '16px',
        position: 'relative',
        display: 'block'
      })

      expect(result).toEqual([
        { fontSize: '16px' },
        { position: 'relative' },
        { display: 'block' }
      ])
      expect(fontSize.callCount).toEqual(1)
      expect(position.callCount).toEqual(1)
      expect(display.callCount).toEqual(1)
      expect(flex.callCount).toEqual(0)
    })
  })
  describe('variant', () => {
    test('returns generate fn with prop property', () => {
      const font = variant({ prop: 'font', key: 'fonts' })

      expect(typeof font).toBe('function')
      expect(font.prop).toBe('font')
    })
  })
  describe('variant.generate', () => {
    test('returns null if prop not passed', () => {
      const font = variant({ prop: 'font', key: 'fonts' })
      expect(font({ theme })).toBe(null)
    })

    test('returns props from variant', () => {
      const font = variant({ prop: 'font', key: 'fonts' })

      expect(font({ theme, font: 'f12.400' })).toEqual({
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px'
      })
    })

    test('returns responsive values', () => {
      const font = variant({ prop: 'font', key: 'fonts' })

      const result = font({
        theme,
        font: { default: 'f12.400', desktop: 'f14.600' }
      })

      expect(result).toEqual([
        {
          '@media screen and (min-width: 0px)': {
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '16px'
          }
        },
        {
          '@media screen and (min-width: 1060px)': {
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '16px'
          }
        }
      ])
    })
  })
})
