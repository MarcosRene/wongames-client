import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import OrderList from '.'

import itemsMock from './mock'

export default {
  title: 'Profile/OrderList',
  component: OrderList,
  args: {
    items: itemsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  }
} as Meta<typeof OrderList> | unknown

const Container = styled.div`
  max-width: 85rem;
  margin: auto;
`

export const Default: StoryObj<typeof OrderList> = {
  render: (args) => (
    <Container>
      <OrderList {...args} />
    </Container>
  )
}
