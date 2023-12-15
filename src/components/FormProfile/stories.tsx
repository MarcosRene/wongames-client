import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  }
} as Meta<typeof FormProfile>

const Container = styled.div`
  max-width: 86rem;
  margin: auto;
`

export const Default: StoryObj<typeof FormProfile> = {
  render: () => (
    <Container>
      <FormProfile />
    </Container>
  )
}
