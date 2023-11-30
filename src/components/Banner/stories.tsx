import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import { BannerProps } from './types'
import Banner from '.'

export default {
  title: 'Banner',
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  argTypes: {
    ribbon: {
      type: 'string'
    }
  },
  component: Banner
} as Meta<typeof Banner>

const Container = styled.div`
  max-width: 104rem;
  margin: 0 auto;
`

export const Default: StoryObj = (args: BannerProps) => (
  <Container>
    <Banner {...args} />
  </Container>
)

Default.args = {}

export const WithRibbon: StoryObj = (args: BannerProps) => (
  <Container>
    <Banner {...args} />
  </Container>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
