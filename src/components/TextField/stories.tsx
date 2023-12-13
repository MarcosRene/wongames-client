import { Meta, StoryObj } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'
import styled from 'styled-components'

import TextField from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  },
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    icon: <Email />,
    iconPosition: 'left',
    initialValue: '',
    placeholder: 'johndoe@email.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta<typeof TextField> | unknown

const Container = styled.div`
  max-width: 300px;
  padding: 1.5rem;
`

export const Default: StoryObj<typeof TextField> = {
  render: (args) => (
    <Container>
      <TextField {...args} />
    </Container>
  )
}

export const Disabled: StoryObj<typeof TextField> = {
  render: (args) => (
    <Container>
      <TextField disabled {...args} />
    </Container>
  )
}

export const WithError: StoryObj<typeof TextField> = {
  args: {
    error: 'Ops...something is wrong'
  }
}
