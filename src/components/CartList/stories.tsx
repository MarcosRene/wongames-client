import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import CartList from '.'

import cartListMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    items: {
      type: ''
    }
  },
  args: {
    items: cartListMock,
    total: 'R$ 330,00'
  }
} as Meta<typeof CartList> | unknown

const Container = styled.div`
  max-width: 80rem;
`

export const Default: StoryObj<typeof CartList> = {
  render: (args) => (
    <Container>
      <CartList {...args} />
    </Container>
  )
}

export const WithButton: StoryObj<typeof CartList> = {
  render: (args) => (
    <Container>
      <CartList {...args} hasButton />
    </Container>
  )
}

export const Empty: StoryObj<typeof CartList> = {
  render: () => (
    <Container>
      <CartList />
    </Container>
  )
}
