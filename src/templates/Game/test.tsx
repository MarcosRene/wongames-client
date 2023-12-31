import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'

import Game from '.'

import { GameTemplateProps } from './types'
import { GameDetailsProps } from 'components/GameDetails/types'

import gamesMock from 'components/GameCardSlider/mock'
import galleryMock from 'components/Gallery/mock'
import highlightMock from 'components/Highlight/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import gameInfoMock from 'components/GameInfo/mock'

const ownerProps: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom HTML</h1>`,
  details: gameDetailsMock as GameDetailsProps,
  upcommingTitle: 'Upcoming',
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedTitle: 'You may like these games',
  recommendedGames: gamesMock
}

jest.mock('components/Menu', () => {
  return () => {
    return 'render Menu component'
  }
})

jest.mock('components/Gallery', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="gallery" />
  }
})

jest.mock('components/GameDetails', () => {
  return () => {
    return 'render GameDetails component'
  }
})

jest.mock('components/GameInfo', () => {
  return () => {
    return 'render GameInfo component'
  }
})

jest.mock('components/Showcase', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="showcase" />
  }
})

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...ownerProps} />)

    expect(screen.getByText(/render menu component/i)).toBeInTheDocument()

    expect(screen.getByTestId('gallery')).toBeInTheDocument()

    expect(
      screen.getByText(/render gamedetails component/i)
    ).toBeInTheDocument()

    expect(screen.getByText(/render gameinfo component/i)).toBeInTheDocument()

    expect(screen.getAllByTestId('showcase')).toHaveLength(2)

    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...ownerProps} gallery={undefined!} />)

    expect(
      screen.queryByText(/render gallery component/i)
    ).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...ownerProps} />)

    expect(screen.getByTestId('gallery')?.parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('gallery')?.parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...ownerProps} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      height: '39.5rem',
      background: `url(${ownerProps.cover}) top center/cover`
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
