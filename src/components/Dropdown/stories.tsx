import { Meta, StoryObj } from '@storybook/react'
import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown
} as Meta<typeof Dropdown>

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    title: 'Click here',
    children: 'Content'
  }
}
