import { Meta } from '@storybook/react'
import styled from 'styled-components'

import Banner from '.'
import { BannerProps } from './types'

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
} as Meta<BannerProps>

const Container = styled.div`
  max-width: 104rem;
  margin: 0 auto;
`

export const Default = (args: BannerProps) => (
  <Container>
    <Banner {...args} />
  </Container>
)

export const WithRibbon = (args: BannerProps) => (
  <Container>
    <Banner {...args} />
  </Container>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
