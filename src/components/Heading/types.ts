import { ReactNode } from 'react'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'huge'
}
