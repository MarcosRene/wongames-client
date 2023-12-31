import { initializeApollo } from 'services/apollo'

import { QueryRecommended } from 'graphql/__genereted__/QueryRecommended'
import { GetRecommended } from 'graphql/queries/recommended'

import GameMapper from 'utils/mappers/GameMapper'
import HightlightMapper from 'utils/mappers/HightlightMapper'

import cartListMock from 'components/CartList/mock'
import optionsMock from 'components/PaymentOptions/mock'

import CartTemplate from 'templates/Cart'
import { CartTemplateProps } from 'templates/Cart/types'

export default function CartPage(props: CartTemplateProps) {
  return <CartTemplate {...props} />
}

export async function getServerSideProps() {
  const appoloClient = initializeApollo()

  const {
    data: { recommended }
  } = await appoloClient.query<QueryRecommended>({
    query: GetRecommended
  })

  return {
    props: {
      cards: optionsMock,
      items: cartListMock,
      total: 'R$ 430,00',
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
