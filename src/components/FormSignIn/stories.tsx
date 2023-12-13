import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  }
} as Meta<typeof FormSignIn>

const Container = styled.div`
  width: 30rem;
  margin: auto;
`

export const Default: StoryObj<typeof FormSignIn> = {
  render: () => (
    <Container>
      <FormSignIn />
    </Container>
  )
}
