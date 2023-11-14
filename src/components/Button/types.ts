import { ReactNode } from 'react'

export type ButtonProps = {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
}

export type StylesProps = Pick<ButtonProps, 'size'>
