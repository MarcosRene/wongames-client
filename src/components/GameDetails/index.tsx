import { Apple, Windows, Linux } from '@styled-icons/fa-brands'

import formatedDate from 'utils/date'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

import { GameDetailsProps, Platform } from './types'

const GameDetails = ({
  developer,
  platforms,
  releaseDate,
  rating,
  genres,
  publisher
}: GameDetailsProps) => {
  const platformIcons = {
    mac: <Apple title="Mac" size={18} />,
    linux: <Linux title="Linux" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release date</S.Label>
          <S.Description>{formatedDate(releaseDate)}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconWrapper>
            {platforms.map((platformIcon: Platform) => (
              <S.Icon key={platformIcon}>{platformIcons[platformIcon]}</S.Icon>
            ))}
          </S.IconWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>
            {rating === 'BR0'
              ? 'Free'
              : `${rating.replace('BR', ' ').concat('+')}`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
