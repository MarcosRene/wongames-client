import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from '../Ribbon/styles'

export const Wrapper = styled.main`
  position: relative;

  ${media.lessThan('large')`
    ${RibbonStyles.Wrapper} {
      right: 0;

      &::before {
        display: none;
      }
    }
  `}

  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    position: relative;

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small};
    background-color: rgba(0, 0, 0, 0.7);

    ${media.greaterThan('medium')`
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};

    strong {
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
