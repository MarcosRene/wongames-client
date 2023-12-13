import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import GameDetails from '.'

import gamesDetailsMock from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: gamesDetailsMock,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: 'inline-check',
      options: ['windows', 'linux', 'mac']
    },
    genres: {
      control: 'inline-check',
      options: ['Role-playing', 'Narrative']
    }
  }
} as Meta<typeof GameDetails>

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export const Default: StoryObj<typeof GameDetails> = {
  render: (args) => (
    <Container>
      <GameDetails {...args} />
    </Container>
  )
}
