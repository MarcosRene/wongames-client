import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
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

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
