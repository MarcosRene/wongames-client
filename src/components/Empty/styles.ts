import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  max-width: 100%;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.primary};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
  `}
`
