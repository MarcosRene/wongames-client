import { InputHTMLAttributes } from 'react'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  label?: string
  labelColor?: 'white' | 'black'
  labelFor?: string
  onCheck?(value?: RadioValue): void
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

export type StyleProps = Pick<RadioProps, 'labelColor'>
