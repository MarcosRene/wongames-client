import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests'
import theme from 'styles/theme'

import GameCardSlider from '.'

import itemsMock from './mock'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={itemsMock} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={itemsMock} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.white
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.white
    })
  })
})
