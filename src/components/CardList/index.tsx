import Heading from 'components/Heading'

import * as S from './styles'

import { CardListProps } from './types'

const CardList = ({ cards }: CardListProps) => (
  <>
    <Heading color="black" lineBottom size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.cardNumber}>
        <img src={card.img} alt={card.cardFlag} />
        <span>{card.cardNumber}</span>
      </S.Card>
    ))}
  </>
)

export default CardList
