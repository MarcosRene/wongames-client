import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests'
import Home from '.'

import { bannersMock } from 'components/BannerSlider/mock'
import { gamesMock } from 'components/GameCardSlider/mock'
import { highLightMock } from 'components/Highlight/mock'

const ownerProps = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highLightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highLightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighligth: highLightMock
}

jest.mock('components/Menu', () => {
  return () => {
    return 'render Menu component'
  }
})

jest.mock('components/Footer', () => {
  return () => {
    return 'render Footer component'
  }
})

jest.mock('components/Showcase', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return <div data-testid="showcase" />
  }
})

jest.mock('components/BannerSlider', () => {
  // eslint-disable-next-line react/display-name
  return () => {
    return 'render BannerSlider component'
  }
})

describe('<Home />', () => {
  it('should render Menu and Footer', () => {
    renderWithTheme(<Home {...ownerProps} />)

    expect(screen.getByText(/render menu component/i)).toBeInTheDocument()
    expect(
      screen.getByText(/render BannerSlider component/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/render footer component/i)).toBeInTheDocument()
    expect(screen.getAllByTestId('showcase')).toHaveLength(5)
  })
})
