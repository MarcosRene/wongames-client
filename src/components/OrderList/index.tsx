import Empty from 'components/Empty'
import Heading from 'components/Heading'
import GameItem from 'components/GameItem'

import { OrderListProps } from './types'

import * as S from './styles'

const OrderList = ({ items }: OrderListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items?.length ? (
      items.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrderList
