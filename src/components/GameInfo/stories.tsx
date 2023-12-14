import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import GameInfo from '.'

import gameInfoMock from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: gameInfoMock
} as Meta<typeof GameInfo>

const Container = styled.div`
  max-width: 144rem;
  margin: auto;
  padding: 1.6rem;
`

export const Default: StoryObj<typeof GameInfo> = {
  render: (args) => (
    <Container>
      <GameInfo {...args} />
    </Container>
  )
}
