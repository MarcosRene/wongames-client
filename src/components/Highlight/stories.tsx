import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import { HighlightProps } from './types'
import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2',
    alignment: 'right'
  }
} as Meta

const Container = styled.div`
  max-width: 104rem;
`

export const Default: StoryObj = (args: HighlightProps) => (
  <Container>
    <Highlight {...args} />
  </Container>
)

Default.args = {}

export const WithFloatImage: StoryObj = (args: HighlightProps) => (
  <Container>
    <Highlight {...args} />
  </Container>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
