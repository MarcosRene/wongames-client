import { ChangeEvent, useState } from 'react'

import * as S from './styles'

import { TextFieldProps } from './types'

const TextField = ({
  label,
  name,
  initialValue = '',
  onInput,
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          icon={icon}
          iconPosition={iconPosition}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>

      {!!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Wrapper>
  )
}

export default TextField
