import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import PaymentOptions from '.'

import paymentOptionsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: paymentOptionsMock
  },
  argTypes: {
    cards: {
      type: ''
    },
    handlePayment: {
      action: 'clicked'
    }
  }
} as Meta<typeof PaymentOptions> | unknown

const Container = styled.div`
  max-width: 40rem;
  padding: 1.6rem;
`

export const Default: StoryObj<typeof PaymentOptions> = {
  render: (args) => (
    <Container>
      <PaymentOptions {...args} />
    </Container>
  )
}
