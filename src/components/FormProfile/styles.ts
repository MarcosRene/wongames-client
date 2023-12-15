import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 100%;

    display: grid;
    gap: ${theme.spacings.xsmall};

    > button {
      margin-top: ${theme.spacings.xxlarge};
    }

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacings.medium};

      > button {
        margin-top: 0;
        grid-column: 2;
        justify-self: end;
      }
    `}
  `}
`
