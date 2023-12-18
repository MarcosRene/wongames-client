import GamesTemplate from 'templates/Games'

import { GamesTemplateProps } from 'templates/Games/types'

import exploreMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: exploreMock
    }
  }
}
