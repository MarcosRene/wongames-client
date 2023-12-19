import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { tint } from 'polished'

import * as EmptyStyles from 'components/Empty/styles'

export const Wrapper = styled.main<{ isEmpty: boolean }>`
  ${({ theme, isEmpty }) => css`
    background: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    align-self: start;

    ${isEmpty &&
    css`
      ${EmptyStyles.Wrapper} {
        color: ${theme.colors.black};
        padding-bottom: ${theme.spacings.medium};
      }

      ${EmptyStyles.Image} {
        max-width: 20rem;
      }

      ${EmptyStyles.Title} {
        font-size: ${theme.font.sizes.large};
      }

      ${EmptyStyles.Description} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
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
