import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from './types'

type StyleProps = Pick<TextFieldProps, 'iconPosition' | 'disabled' | 'error'>

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      color: ${theme.colors.gray};
      cursor: not-allowed;

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};

      &:focus-within {
        outline: 2px solid transparent;
      }
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div<StyleProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)};
    ${!!error && wrapperModifiers.error(theme)};
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xsmall};
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    outline: 2px solid transparent;

    display: flex;

    transition: outline 180ms ease-in-out;

    &:focus-within {
      outline: 2px solid ${theme.colors.primary};
    }
  `}
`

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.red};
  `}
`

export const Input = styled.input<StyleProps>`
  ${({ theme, iconPosition }) => css`
    width: 100%;
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    background: transparent;
    color: ${theme.colors.black};
    border: 0;
    outline: none;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div<StyleProps>`
  ${({ theme, iconPosition }) => css`
    width: 2.2rem;
    color: ${theme.colors.gray};
    display: flex;
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`
