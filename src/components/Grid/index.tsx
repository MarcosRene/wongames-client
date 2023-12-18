import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
  `}
`
