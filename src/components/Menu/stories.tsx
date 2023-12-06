import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscree',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<typeof Menu>

export const Default: StoryObj<typeof Menu> = {}
