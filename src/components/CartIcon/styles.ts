import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.white};
    cursor: pointer;
  `}
`

export const Badge = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    width: 1.6rem;
    height: 1.6rem;
    font-size: 1rem;
    line-height: 140%;
    border-radius: 50%;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
