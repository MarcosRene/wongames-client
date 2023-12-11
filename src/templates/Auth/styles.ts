import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const BannerBlock = styled.div``

export const BannerSubtitle = styled.h3`
  ${({ theme }) => css`
    > strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const BannerFooter = styled.p``

export const BannerContent = styled.div``
