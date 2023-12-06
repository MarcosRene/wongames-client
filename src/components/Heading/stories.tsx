import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<typeof Heading>

export const Default: StoryObj<typeof Heading> = {
  args: {
    children: 'Most Populars'
  }
}
