import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Profile />)
  })
})
