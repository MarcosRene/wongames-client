import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import Showcase from '.'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Showcase>

const Container = styled.div`
  margin: 0 auto;
`

export const Default: StoryObj<typeof Showcase> = {
  args: {
    title: 'Most Popular',
    highlight: highlightMock,
    games: gamesMock
  }
}

export const WithoutHighlight: StoryObj<typeof Showcase> = {
  args: {
    title: 'Most Popular',
    games: gamesMock
  }
}

export const WithoutGames: StoryObj<typeof Showcase> = {
  args: {
    title: 'Most Popular',
    highlight: highlightMock
  }
}
