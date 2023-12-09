import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    labelFor: 'check',
    labelColor: 'white'
  },
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<typeof Checkbox>

const Container = styled.div`
  padding: 1rem;

  div + div {
    margin-top: 0.8rem;
  }
`

export const Default: StoryObj<typeof Checkbox> = {
  render: () => (
    <Container>
      <Checkbox name="category" label="Action" labelFor="action" isChecked />
      <Checkbox name="category" label="Adventure" labelFor="adventure" />
      <Checkbox name="category" label="Strategy" labelFor="strategy" />
    </Container>
  )
}
