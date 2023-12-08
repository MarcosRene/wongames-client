import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'function'
    }
  }
} as Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now'
  }
}

export const withIcon: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />
  }
}

export const Link: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    children: 'Buy now',
    as: 'a',
    href: '/link'
  }
}

export const Minimal: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now',
    icon: <AddShoppingCart />,
    minimal: true
  }
}
