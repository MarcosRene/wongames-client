import { Meta, StoryObj } from '@storybook/react'

import Footer from '.'

import * as S from './styles'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: StoryObj = () => (
  <S.WrapperStory>
    <Footer />
  </S.WrapperStory>
)

Default.args = {}
