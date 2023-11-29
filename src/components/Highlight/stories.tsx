import { Meta, StoryFn } from '@storybook/react'
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
    buttonLink: '/games/rdr2'
  }
} as Meta<HighlightProps>

const Container = styled.div`
  max-width: 104rem;
`

export const Default: StoryFn<HighlightProps> = (args) => (
  <Container>
    <Highlight {...args} />
  </Container>
)

export const WithFloatImage: StoryFn<HighlightProps> = (args) => (
  <Container>
    <Highlight {...args} />
  </Container>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
