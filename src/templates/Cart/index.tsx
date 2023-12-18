import CartList from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import Heading from 'components/Heading'
import PaymentOptions from 'components/PaymentOptions'
import Showcase from 'components/Showcase'

import BaseTemplate from 'templates/Base'

import * as S from './styles'

import { CartTemplateProps } from './types'

const CartTemplate = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartTemplateProps) => {
  const handlePayment = () => {}

  return (
    <BaseTemplate>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </BaseTemplate>
  )
}

export default CartTemplate
