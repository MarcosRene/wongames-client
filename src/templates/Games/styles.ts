import styled, { css, keyframes } from 'styled-components'

import { Container } from 'components/Container'
import media from 'styled-media-query'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 26rem 1fr;
      gap: ${theme.grid.gutter};
    `};
  `}
`

const floatTopToBottom = keyframes`
  0% {
    transform: translateY(0.8rem);
    opacity: .5;
  }
  50% {
    transform: translateY(-0.8rem);
    opacity: 1;
  }
  100% {
    transform: translateY(0.8rem);
    opacity: .5;
  }
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    font-weight: 700;
    color: ${theme.colors.white};
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    animation: ${floatTopToBottom} 2s forwards infinite;

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`
