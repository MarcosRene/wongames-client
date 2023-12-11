import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import FormSignUp from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta<typeof FormSignUp>

const Container = styled.div`
  width: 30rem;
  margin: auto;
`

export const Default: StoryObj<typeof FormSignUp> = {
  render: () => (
    <Container>
      <FormSignUp />
    </Container>
  )
}
