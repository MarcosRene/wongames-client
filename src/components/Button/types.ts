import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from 'react'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: ReactNode
  icon?: JSX.Element
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  as?: ElementType
  minimal?: boolean
} & ButtonTypes

export type StylesProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal'
>
