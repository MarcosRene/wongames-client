import { ForwardRefRenderFunction, forwardRef } from 'react'
import { ButtonProps, StylesProps } from './types'

import * as S from './styles'

const Button: ForwardRefRenderFunction<StylesProps, ButtonProps> = (
  {
    children,
    as = 'button',
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    as={as}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
