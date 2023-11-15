import { Meta, StoryFn } from '@storybook/react'

import Footer from '.'

import * as S from './styles'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: StoryFn = () => (
  <S.WrapperStory>
    <Footer />
  </S.WrapperStory>
)
