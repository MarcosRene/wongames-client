import { Meta, StoryObj } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta<typeof Logo>

export const Default: StoryObj<typeof Logo> = {
  args: {
    color: 'white'
  }
}
