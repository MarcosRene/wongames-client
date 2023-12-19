import styled, { css } from 'styled-components'

export const Nav = styled.div`
  ${({ theme }) => css`
    min-width: 26rem;
    display: flex;
    flex-direction: column;

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }
  `}
`

export const Username = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    text-decoration: none;
    transition: background, color, ${theme.transition.default};

    display: flex;
    align-items: center;

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
