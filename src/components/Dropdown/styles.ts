import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding-right: 2.4rem;
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    cursor: pointer;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    margin-top: ${theme.spacings.small};
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;

    &::before {
      content: '';
      position: absolute;
      top: -1.2rem;
      right: 2.4rem;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
    }
  `}
`

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content} {
      transition:
        transform 0.2s ease-in,
        opacity ${theme.transition.default};

      ${isOpen ? wrapperModifiers.open() : wrapperModifiers.close()};
    }
  `}
`
