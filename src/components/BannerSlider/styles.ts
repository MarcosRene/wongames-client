import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as BannerStyles from '../Banner/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      margin-top: ${theme.spacings.small};

      display: flex !important;
      align-items: center;
      justify-content: center;

      list-style: none;

      li {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0 ${theme.spacings.xxsmall};
        background: ${theme.colors.white};
        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        width: 1.2rem;
        height: 1.2rem;
        opacity: 0;
        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        max-width: 104rem;
        margin: 0 auto;
      }

      .slick-dots {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        margin: 0;
        flex-direction: column;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    `}
  `}
`
