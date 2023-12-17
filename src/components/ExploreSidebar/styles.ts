import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { rgba } from 'polished'

import { StyleProps } from './types'

import * as CheckboxStyles from 'components/Checkbox/styles'
import * as RadioStyles from 'components/Radio/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const IconWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};
    margin-top: 5.6rem;
    margin-bottom: 2rem;
    flex: 1;
    overflow-y: auto;
    transition: transform ${theme.transition.default};

    ${media.greaterThan('medium')`
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
      overflow-y: initial;
    `}
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: absolute;
    transition: opacity ${theme.transition.default};
    opacity: 0;
  `}
`

export const Items = styled.div`
  ${({ theme }) => css`
    & > div:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    & + div {
      margin-top: ${theme.spacings.small};
      padding-top: ${theme.spacings.xsmall};
      border-top: 0.1rem solid ${rgba(theme.colors.gray, 0.2)};
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    box-shadow: 0 -0.2rem 0.4rem ${rgba(theme.colors.black, 0.2)};
  `}
`

const wrapperModifiers = {
  open: (theme: DefaultTheme) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: ${theme.layers.modal};

    ${Overlay} {
      z-index: ${theme.layers.modal};
      background-color: #fff;
      top: 0;
      left: 0;
      position: fixed;
      width: 100%;
      height: 100vh;
      opacity: 1;
    }

    ${Content} {
      margin-top: ${theme.spacings.medium};
      transform: translateY(0);
      overflow-y: scroll;
    }

    ${Content}, ${Footer}, ${IconWrapper} {
      z-index: ${theme.layers.modal};
    }

    ${HeadingStyles.Wrapper} {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.black};
    }

    ${RadioStyles.Label},
    ${CheckboxStyles.Label} {
      color: ${theme.colors.black};
    }

    ${IconWrapper} {
      color: ${theme.colors.black};

      > svg {
        position: absolute;
        top: 0.8rem;
        right: 0.8rem;
        width: 30px;

        &:first-child {
          display: none;
        }
      }
    }
  `,

  close: (theme: DefaultTheme) => css`
    ${IconWrapper} {
      color: ${theme.colors.white};

      > svg:last-child {
        display: none;
      }
    }

    ${Content} {
      height: 0;
      transform: translateY(3rem);
    }

    ${Content}, ${Footer} {
      position: absolute;
      left: 0;
      visibility: hidden;
    }
  `
}

export const Wrapper = styled.div<StyleProps>`
  ${({ theme, isOpen }) => css`
    ${media.lessThan('medium')`
      ${!!isOpen && wrapperModifiers.open(theme)}
      ${!isOpen && wrapperModifiers.close(theme)}
    `}
  `}
`
