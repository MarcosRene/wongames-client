import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import GameCardSlider from '.'
import { gamesMock as items } from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<typeof GameCardSlider>

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export const Default: StoryObj<typeof GameCardSlider> = {
  render: (args) => (
    <Container>
      <GameCardSlider {...args} />
    </Container>
  )
}

Default.args = {
  color: 'white'
}
