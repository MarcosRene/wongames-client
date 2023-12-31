import { initializeApollo } from 'services/apollo'
import GameMapper from 'utils/mappers/GameMapper'
import HightlightMapper from 'utils/mappers/HightlightMapper'

import { QueryRecommended } from 'graphql/__genereted__/QueryRecommended'
import { GetRecommended } from 'graphql/queries/recommended'

import gamesMock from 'components/GameCardSlider/mock'

import WishlistTemplate from 'templates/Wishlist'
import { WishlistTemplateProps } from 'templates/Wishlist/types'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <WishlistTemplate {...props} />
}

export async function getStaticProps() {
  const appoloClient = initializeApollo()

  const {
    data: { recommended }
  } = await appoloClient.query<QueryRecommended>({
    query: GetRecommended
  })

  return {
    props: {
      games: gamesMock,
      recommendedTitle: recommended?.data?.attributes?.section.title,
      recommendedGames: GameMapper.toDomain(
        recommended?.data?.attributes?.section.games?.data
      ),
      recommendedHighlight: HightlightMapper.toDomain(
        recommended?.data,
        'section'
      )
    }
  }
}
