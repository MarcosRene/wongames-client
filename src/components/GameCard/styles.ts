import styled, { css, DefaultTheme } from 'styled-components'

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    margin-right: calc(${theme.spacings.xxsmall} / 2);
    padding: 0 ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `,

  promotional: (theme: DefaultTheme) => css`
    margin-right: ${theme.spacings.xxsmall};
    color: ${theme.colors.gray};
    text-decoration: line-through;
  `
}

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
  `}
`

export const ImageBox = styled.a`
  position: relative;
  min-height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`

export const Info = styled.a`
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    top: -0.5rem;
    color: ${theme.colors.primary};

    cursor: pointer;

    svg {
      width: 2.5rem;
    }
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `}
`

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    height: 3rem;
    align-items: center;

    ${!isPromotional && priceModifiers.default(theme)};
    ${isPromotional && priceModifiers.promotional(theme)};
  `}
`
