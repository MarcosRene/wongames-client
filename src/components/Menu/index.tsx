import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import Logo from '../Logo'

import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.WrapperIcon>
      <MenuIcon />
    </S.WrapperIcon>

    <S.LogoWrapper>
      <Logo />
    </S.LogoWrapper>

    <S.MenuGroup>
      <S.WrapperIcon>
        <SearchIcon />
      </S.WrapperIcon>

      <S.WrapperIcon>
        <ShoppingCartIcon />
      </S.WrapperIcon>
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu
