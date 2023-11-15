import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from '../Button'
import Logo from '../Logo'

import * as S from './styles'
import { useState } from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.WrapperIcon onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open menu" />
      </S.WrapperIcon>

      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.WrapperIcon>
          <SearchIcon aria-label="Search" />
        </S.WrapperIcon>

        <S.WrapperIcon>
          <ShoppingCartIcon aria-label="Open shopping cart" />
        </S.WrapperIcon>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>

        <S.RegisterBox>
          <Button fullWidth size="large">
            Log in now
          </Button>
          <span>or</span>
          <S.CreateAccount href="#" title="Sign Up">
            Sign Up
          </S.CreateAccount>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu