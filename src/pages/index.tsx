import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import HomeTemplate from 'templates/Home'

import { HomeTemplateProps } from 'templates/Home/types'

export default function PageRoot(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      UpcomingGames: gamesMock,
      UpcomingHighligth: highlightMock,
      UpcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
