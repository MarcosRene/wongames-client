import {
  AccountCircle,
  ExitToApp,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular'

import Dropdown from 'components/Dropdown'

import { UserDropdownProps } from './types'

import * as S from './styles'
import Link from 'next/link'

const UserDropdown = ({ username }: UserDropdownProps) => {
  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <Link href="/profile/me" passHref>
          <S.Link title="My profile">
            <AccountCircle size={24} />
            <span>My Profile</span>
          </S.Link>
        </Link>
        <Link href="/wishlist" passHref>
          <S.Link title="Wishlist">
            <FavoriteBorder size={24} />
            <span>Wishlist</span>
          </S.Link>
        </Link>
        <Link href="/logout" passHref>
          <S.Link title="Sign out">
            <ExitToApp size={24} />
            <span>Sign out</span>
          </S.Link>
        </Link>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
