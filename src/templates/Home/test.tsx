import 'match-media-mock'
import { screen } from '@testing-library/react'

import { render } from 'utils/tests'
import Home from '.'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const ownerProps = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighligth: highlightMock,
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock
}

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
    render(<Home {...ownerProps} />)

    expect(
      screen.getByText(/render BannerSlider component/i)
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('showcase')).toHaveLength(4)
  })
})
