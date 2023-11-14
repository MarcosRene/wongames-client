import { ButtonProps } from './types'

import * as S from './styles'

const Button = ({
  children,
  size = 'medium',
  fullWidth = false
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
