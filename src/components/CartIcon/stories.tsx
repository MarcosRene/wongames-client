import { Meta, StoryObj } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon
} as Meta<typeof CartIcon>

export const Default: StoryObj<typeof CartIcon> = {}

export const WithItems: StoryObj<typeof CartIcon> = {
  args: {
    quantity: 12
  }
}
