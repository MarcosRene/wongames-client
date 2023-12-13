import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscree'
  }
} as Meta<typeof Menu>

export const Default: StoryObj<typeof Menu> = {}
