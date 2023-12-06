import { HomeTemplateProps } from 'templates/Home/types'

import Home from 'templates/Home'

import { bannersMock } from 'components/BannerSlider/mock'
import { gamesMock } from 'components/GameCardSlider/mock'
import { highLightMock } from 'components/Highlight/mock'

export default function PageRoot(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highLightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highLightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highLightMock
    }
  }
}
