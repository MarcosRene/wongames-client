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

describe('<Home />', () => {
  it('should render Menu and Footer', () => {
    renderWithTheme(<Home {...ownerProps} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)

    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)

    expect(screen.getAllByText(/read dead it’s back/i)).toHaveLength(3)
  })
})
