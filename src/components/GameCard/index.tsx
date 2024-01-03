import Link from 'next/link'
import Image from 'next/image'
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import formatCurrency from 'utils/formatCurrency'

import Button from 'components/Button'
import Ribbon from 'components/Ribbon'

import { GameCardProps } from './types'

import * as S from './styles'

const GameCard = ({
  slug,
  developer,
  img,
  price,
  title,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: GameCardProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <Link href={`/game/${slug}`} passHref>
        <S.ImageBox>
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
        </S.ImageBox>
      </Link>

      <S.Content>
        <Link href={`/game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>

        <S.FavButton onClick={onFav} role="button">
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isPromotional>
              {price === 0 ? 'Free' : formatCurrency(price ?? 0)}
            </S.Price>
          )}

          <S.Price>
            {price === 0
              ? 'Free'
              : formatCurrency((promotionalPrice || price) ?? 0)}
          </S.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
