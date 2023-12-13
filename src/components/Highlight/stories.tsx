import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import Highlight from '.'
import highlightMock from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: highlightMock
} as Meta<typeof Highlight>

const Container = styled.div`
  max-width: 104rem;
`

export const Default: StoryObj<typeof Highlight> = {
  render: (args) => (
    <Container>
      <Highlight {...args} />
    </Container>
  )
}

Default.args = {}

export const WithFloatImage: StoryObj<typeof Highlight> = {
  render: (args) => (
    <Container>
      <Highlight {...args} />
    </Container>
  )
}

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
