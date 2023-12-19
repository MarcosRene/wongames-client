import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { tint } from 'polished'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    align-self: start;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small};
      font-size: ${theme.font.sizes.medium};
    `};
  `}
`

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
