import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { StylesProps } from './types'

const wrapperModifiers = {
  small: css`
    height: 3rem;
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
  `,

  medium: css`
    height: 4rem;
    font-size: ${({ theme }) => theme.font.sizes.small};
    padding: ${({ theme }) =>
      `${theme.spacings.xxsmall} ${theme.spacings.medium}`};
  `,

  large: css`
    height: 5rem;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    padding: ${({ theme }) =>
      `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`};
  `,

  fullWidth: css`
    width: 100%;
  `,

  withIcon: css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${({ theme }) => theme.spacings.xxsmall};
      }
    }
  `,

  minimal: css`
    background: none;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => darken(0.1, theme.colors.primary)};
    }
  `,

  disabled: css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<StylesProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    padding: ${theme.spacings.xxsmall};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${minimal
        ? 'none'
        : 'linear-gradient(180deg, #e35565 0%, #d958a6 50%)'};
    }

    ${!!size && wrapperModifiers[size]};
    ${fullWidth && wrapperModifiers.fullWidth};
    ${hasIcon && wrapperModifiers.withIcon};
    ${minimal && wrapperModifiers.minimal};
    ${disabled && wrapperModifiers.disabled};
  `};
`
