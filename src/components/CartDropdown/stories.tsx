import { Meta, StoryObj } from '@storybook/react'
import CartDropdown from '.'

import itemsMock from 'components/CartList/mock'
import styled from 'styled-components'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: itemsMock,
    total: 'R$ 300'
  }
} as Meta<typeof CartDropdown>

const Container = styled.div`
  padding: 1.6rem;
  max-width: 98%;
  display: flex;
  justify-content: flex-end;
`

export const Default: StoryObj<typeof CartDropdown> = {
  render: (args) => (
    <Container>
      <CartDropdown {...args} />
    </Container>
  )
}
