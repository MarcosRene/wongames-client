import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

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
  }
} as Meta<typeof GameCard>

const Container = styled.div`
  width: 30rem;
`

export const Default: StoryObj<typeof GameCard> = {
  render: (args) => (
    <Container>
      <GameCard {...args} />
    </Container>
  )
}

Default.args = {}

export const WithPromotionalPrice: StoryObj<typeof GameCard> = {
  render: (args) => (
    <Container>
      <GameCard {...args} />
    </Container>
  )
}

WithPromotionalPrice.args = {
  promotionalPrice: 'R$ 200,00'
}

export const WithRibbon: StoryObj<typeof GameCard> = {
  render: (args) => (
    <Container>
      <GameCard {...args} />
    </Container>
  )
}

WithRibbon.args = {
  promotionalPrice: 'R$ 215,00',
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
