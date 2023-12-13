import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import GameCardSlider from '.'
import gamesMock from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items: gamesMock },
  parameters: {
    layout: 'fullscreen'
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
