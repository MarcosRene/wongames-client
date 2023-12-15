import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import { ProfileMenuProps } from './types'

import * as S from './styles'

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <S.Link
      href="/profile/me"
      isActive={activeLink === '/profile/me'}
      title="My profile"
    >
      <AccountCircle size={24} />
      <span>My profile</span>
    </S.Link>

    <S.Link
      href="/profile/cards"
      isActive={activeLink === '/profile/cards'}
      title="My cards"
    >
      <CreditCard size={24} />
      <span>My cards</span>
    </S.Link>

    <S.Link
      href="/profile/orders"
      isActive={activeLink === '/profile/orders'}
      title="My orders"
    >
      <FormatListBulleted size={24} />
      <span>My orders</span>
    </S.Link>

    <S.Link href="/logout" title="Logout button">
      <ExitToApp size={24} />
      <span>Sign out</span>
    </S.Link>
  </S.Nav>
)

export default ProfileMenu
