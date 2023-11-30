import { Meta, StoryObj } from '@storybook/react'
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
} as Meta

const Container = styled.div`
  width: 40rem;
  height: 25rem;
  position: relative;
  background-color: #888;
`

export const Default: StoryObj = (args: RibbonProps) => (
  <Container>
    <Ribbon {...args} />
  </Container>
)

Default.args = {}
