import { ReactNode } from 'react'

export type ButtonProps = {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

export type StylesProps = Pick<ButtonProps, 'size' | 'fullWidth'>
