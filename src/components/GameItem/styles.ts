import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      display: flex;
    `}
  `}
`

export const GameContent = styled.div`
  display: flex;
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    margin-right: 1.2rem;
    width: 9.6rem;
    height: 5.6rem;
    position: relative;

    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      width: 15rem;
      height: 7rem;
      margin-right: ${theme.spacings.xsmall};
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.small};
    color: ${theme.colors.black};

    ${media.greaterThan('medium')`
      font-size: 2rem;
      line-height: 2rem;
    `};
  `}
`

export const Price = styled.p`
  ${({ theme }) => css`
    padding: 0.2rem ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`

export const DownloadLink = styled.a`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
    color: ${theme.colors.primary};
  `}
`

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    display: flex;
    flex-direction: column;
    min-width: 28rem;
    margin-top: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      margin-top: 0;
      flex: 1;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;
    `}
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-left: ${theme.spacings.xxsmall};
    }

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`
