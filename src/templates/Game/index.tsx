import GameDetails from 'components/GameDetails'
import Gallery from 'components/Gallery'
import GameInfo from 'components/GameInfo'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'

import Base from 'templates/Base'

import { GameTemplateProps } from './types'

import * as S from './styles'

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGellary>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGellary>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
