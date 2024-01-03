import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'
import { render, RenderOptions } from '@testing-library/react'

import theme from 'styles/theme'

const renderWithTheme = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => {
  const providers: React.ReactElement = (
    <ThemeProvider theme={theme}>{ui}</ThemeProvider>
  )

  return {
    ...render(providers, {
      ...options
    })
  }
}

export * from '@testing-library/react'
export { renderWithTheme as render }

export const renderUserEvent = (jsx: React.ReactElement) => {
  return {
    user: userEvent.setup(),
    ...renderWithTheme(jsx)
  }
}
