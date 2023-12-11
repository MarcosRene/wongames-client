import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};
    background: url(/img/auth-bg.jpg) center center/cover;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const BannerSubtitle = styled.h3`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};

    > strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const BannerFooter = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: flex-end;
  `}
`

export const BannerContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};

    display: grid;
    align-items: center;
    justify-content: center;
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    color: ${theme.colors.white};
    z-index: ${theme.layers.base};

    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
  `}
`

export const BannerContainerWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${HeadingStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${LogoStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
      width: 38rem;
      padding: 0rem 1.6rem;
    `}
  `}
`
