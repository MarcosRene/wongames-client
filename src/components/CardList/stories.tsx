import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import CardList from '.'

import cardsMock from 'components/PaymentOptions/mock'

export default {
  title: 'Profile/CardList',
  component: CardList,
  args: {
    cards: cardsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  }
} as Meta<typeof CardList>

const Container = styled.div`
  max-width: 85rem;
  margin: auto;
`

export const Default: StoryObj<typeof CardList> = {
  render: (args) => (
    <Container>
      <CardList {...args} />
    </Container>
  )
}
