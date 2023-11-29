import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { RibbonProps } from './types'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonProps['color']) => css`
    background-color: ${theme.colors[color!]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color!])};
      border-top-color: ${darken(0.2, theme.colors[color!])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    padding: 0 ${theme.spacings.small};
    height: 3.6rem;
    right: -2rem;

    font-size: ${theme.font.sizes.small};

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    padding: 0 ${theme.spacings.xsmall};
    right: -1.5rem;

    font-size: ${theme.font.sizes.xsmall};

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!color && wrapperModifiers.color(theme, color)}
  `}
`
