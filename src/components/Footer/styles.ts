import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from '../Heading/styles'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr)
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    text-align: center;
  `}
`
