import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import BannerSlider from '.'
import { bannersMock as items } from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<typeof BannerSlider>

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export const Default: StoryObj<typeof BannerSlider> = {
  render: (args) => (
    <Container>
      <BannerSlider {...args} />
    </Container>
  )
}
