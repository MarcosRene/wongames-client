import styled, { css, DefaultTheme } from 'styled-components'
import { tint } from 'polished'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`

export const CartsList = styled.div`
  display: flex;
  flex-direction: column;
`

const ItemStyles = (theme: DefaultTheme) => css`
  height: 5rem;
  padding: 0 ${theme.spacings.xxsmall};
  background: ${theme.colors.lightGray};
  color: ${theme.colors.black};
  border-radius: 0.2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
`

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    font-weight: ${theme.font.bold};
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};

    display: flex;
    align-items: center;

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)};

    svg {
      width: 2.4rem;
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`
