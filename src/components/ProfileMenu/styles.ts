import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { StyleProps } from './types'

export const Nav = styled.nav`
  ${({ theme }) => css`
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    display: flex;

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`

const linkModifiers = {
  default: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  `,

  active: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  `
}

export const Link = styled.a<StyleProps>`
  ${({ theme, isActive }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    text-decoration: none;
    transition: background, color, ${theme.transition.default};

    display: flex;
    align-items: center;

    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    ${media.lessThan('medium')`
      flex: 1;
      justify-content: center;

      > span {
        display: none;
      }
    `}

    ${!isActive && linkModifiers.default};
    ${isActive && linkModifiers.active};
  `}
`
