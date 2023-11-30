import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import { GameCardProps } from './types'
import GameCard from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<typeof GameCard>

const Container = styled.div`
  width: 30rem;
`

export const Default: StoryObj = (args: GameCardProps) => (
  <Container>
    <GameCard {...args} />
  </Container>
)

Default.args = {}

export const WithPromotionalPrice: StoryObj = (args: GameCardProps) => (
  <Container>
    <GameCard {...args} />
  </Container>
)

WithPromotionalPrice.args = {
  promotionalPrice: 'R$ 200,00'
}

export const WithRibbon: StoryObj = (args: GameCardProps) => (
  <Container>
    <GameCard {...args} />
  </Container>
)

WithRibbon.args = {
  promotionalPrice: 'R$ 215,00',
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
