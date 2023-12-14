import { Meta, StoryObj } from '@storybook/react'
import Empty from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta<typeof Empty>

export const Default: StoryObj<typeof Empty> = {
  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true
  }
}

export const WithoutLink: StoryObj<typeof Empty> = {
  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here'
  }
}
