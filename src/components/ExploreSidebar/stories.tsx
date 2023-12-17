import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import ExploreSidebar from '.'

import exploreMock from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: exploreMock
  },
  decorators: [(Story) => <Container>{Story()}</Container>]
} as Meta<typeof ExploreSidebar>

const Container = styled.div`
  max-width: 32rem;
  padding: 1.6rem;
`

export const Default: StoryObj<typeof ExploreSidebar> = {
  render: (args) => <ExploreSidebar {...args} />
}

export const WithInitialValues: StoryObj<typeof ExploreSidebar> = {
  args: {
    initialValues: { windows: true, sort_by: 'low-to-high' }
  }
}
