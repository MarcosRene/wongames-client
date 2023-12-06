import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta<typeof Footer>

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export const Default: StoryObj<typeof Footer> = {
  render: () => (
    <Container>
      <Footer />
    </Container>
  )
}
