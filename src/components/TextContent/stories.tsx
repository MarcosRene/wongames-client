import { Meta, StoryObj } from '@storybook/react'
import TextContent from '.'

import textMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock
} as Meta<typeof TextContent>

export const Default: StoryObj<typeof TextContent> = {}
