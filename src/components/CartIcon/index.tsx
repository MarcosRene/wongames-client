import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined'

import { CartIconProps } from './types'

import * as S from './styles'

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="cart items">{quantity}</S.Badge>}
    <ShoppingCartIcon aria-label="shopping cart" />
  </S.Wrapper>
)

export default CartIcon
