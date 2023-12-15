import { useState } from 'react'
import { Add, ShoppingCart } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'

import { PaymentOptionsProps } from './types'

import * as S from './styles'

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  const handleRadioChecked = () => setChecked(true)

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment Options
        </Heading>

        <S.CartsList>
          {cards?.map((card) => (
            <S.CardItem key={card.cardNumber}>
              <S.CardInfo>
                <img src={card.img} alt={card.cardFlag} />

                {card.cardNumber}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.cardNumber}
                value={card.cardNumber}
                onCheck={handleRadioChecked}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CartsList>
      </S.Body>

      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
