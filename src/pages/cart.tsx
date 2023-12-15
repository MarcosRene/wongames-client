import Cart from 'templates/Cart'

import { CartTemplateProps } from 'templates/Cart/types'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cartListMock from 'components/CartList/mock'
import optionsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      cards: optionsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      items: cartListMock,
      total: 'R$ 430,00'
    }
  }
}
