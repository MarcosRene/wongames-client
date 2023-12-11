import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

export const Container = styled.div`
  width: 30rem;
  margin: auto;
`

export const Default: StoryObj = {
  render: () => (
    <Container>
      <FormSignIn />
    </Container>
  )
}
