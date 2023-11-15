import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscree',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
