import { LinkProps } from 'next/link'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

export type StyleProps = {
  isActive?: boolean
} & LinkProps
