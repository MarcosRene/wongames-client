import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { StyleProps } from './types'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.small} 0;
    z-index: ${theme.layers.menu};

    display: flex;
    align-items: center;
  `}
`

export const WrapperIcon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.8rem;
    height: 2.8rem;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
    `}
  `};
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    margin: 0.3rem ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
        display: block;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const MenuFull = styled.nav<StyleProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: ${theme.colors.white};
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    z-index: ${theme.layers.menu};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      margin-bottom: ${theme.spacings.small};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.black};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 180ms ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 180ms ease-in-out;
    }
  `}
`
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
    text-decoration: none;
  `}
`
