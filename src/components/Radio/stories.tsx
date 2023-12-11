import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import Radio from '.'

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta<typeof Radio>

const Container = styled.div`
  padding: 1rem;

  div + div {
    margin-top: 1.6rem;
  }
`

export const Default: StoryObj<typeof Radio> = {
  render: (args) => (
    <Container>
      <Radio
        label="First"
        labelFor="first"
        id="first"
        name="nome"
        value="first"
        defaultChecked
        {...args}
      />

      <Radio
        label="Second"
        labelFor="second"
        id="second"
        name="nome"
        value="second"
        {...args}
      />

      <Radio
        label="Third"
        labelFor="third"
        id="third"
        name="nome"
        value="third"
        {...args}
      />
    </Container>
  )
}
