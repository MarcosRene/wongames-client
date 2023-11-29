import { Meta, StoryFn } from '@storybook/react'
import styled from 'styled-components'

import { RibbonProps } from './types'

import Ribbon from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
    color: 'primary',
    size: 'normal'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<RibbonProps>

const Container = styled.div`
  width: 40rem;
  height: 25rem;
  position: relative;
  background-color: #888;
`

export const Default: StoryFn<RibbonProps> = (args) => (
  <Container>
    <Ribbon {...args} />
  </Container>
)
