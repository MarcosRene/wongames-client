import React from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from '@storybook/theming'

import { GlobalStyles } from '../src/styles/global'
import theme from '../src/styles/theme'

export const parameters = {
  backgrounds: {
    default: 'won-dark',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  },
  docs: {
    theme: themes.dark
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
