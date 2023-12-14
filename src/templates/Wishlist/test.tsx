import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const ownerProps = {
  games: gamesMock,
  recommededGames: gamesMock,
  recommededHighlight: highlightMock
}

jest.mock('components/Showcase', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="showcase" />
  }
})

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...ownerProps} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('showcase')).toBeInTheDocument()
  })
})
