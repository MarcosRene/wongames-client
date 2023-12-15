import { InputHTMLAttributes, ReactNode } from 'react'

export type TextFieldProps = Partial<{
  onInput: (value: string) => void
  label: string
  initialValue: string
  icon: ReactNode
  iconPosition: 'left' | 'right'
  disabled: boolean
  error: string
}> &
  InputHTMLAttributes<HTMLInputElement>
