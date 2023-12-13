import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import Gallery from '.'
import galleryMock from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: { items: galleryMock },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Gallery>

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export const Default: StoryObj<typeof Gallery> = {
  render: (args) => (
    <Container>
      <Gallery {...args} />
    </Container>
  )
}
