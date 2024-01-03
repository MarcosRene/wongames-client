import { screen } from '@testing-library/react'
import { render } from 'utils/tests'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const ownerProps = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedTitle: 'You may like these games'
}

jest.mock('components/Showcase', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="showcase" />
  }
})

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    render(<Wishlist {...ownerProps} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    render(
      <Wishlist
        recommendedTitle="You may like these games"
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.queryByText(/you may like these games/i)
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
