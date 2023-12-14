import Wishlist from 'templates/Wishlist'

import { WishlistTemplateProps } from 'templates/Wishlist/types'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommededGames: gamesMock,
      recommededHighlight: highlightMock
    }
  }
}
