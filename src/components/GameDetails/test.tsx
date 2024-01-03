import { screen } from '@testing-library/react'
import { render } from 'utils/tests'

import { GameDetailsProps } from './types'

import GameDetails from '.'

const ownerProps: GameDetailsProps = {
  developer: 'Different Tales',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative'],
  publisher: 'Walktrough'
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...ownerProps} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    render(<GameDetails {...ownerProps} />)

    expect(screen.getAllByRole('img')).toHaveLength(3)

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render the developer', () => {
    render(<GameDetails {...ownerProps} />)

    expect(screen.getByText(/different tales/i)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    render(<GameDetails {...ownerProps} />)

    expect(screen.getByText(/walktrough/i)).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    render(<GameDetails {...ownerProps} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...ownerProps} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    render(<GameDetails {...ownerProps} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    render(<GameDetails {...ownerProps} />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
