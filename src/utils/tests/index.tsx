import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'
import { render, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export const renderUserEvent = (jsx: React.ReactElement) => {
  return {
    user: userEvent.setup(),
    ...renderWithTheme(jsx)
  }
}
