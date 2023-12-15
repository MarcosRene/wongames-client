import { Meta, StoryObj } from '@storybook/react'
import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu
} as Meta<typeof ProfileMenu>

export const Default: StoryObj<typeof ProfileMenu> = {}

export const WithActiveLink: StoryObj<typeof ProfileMenu> = {
  args: {
    activeLink: '/profile/me'
  },
  argTypes: {
    activeLink: {
      control: 'select',
      options: ['/profile/me', '/profile/cards', '/profile/orders']
    }
  }
}
