import { Divider } from 'components/Divider'
import GameDetails from 'components/GameDetails'
import Gallery from 'components/Gallery'
import GameInfo from 'components/GameInfo'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'

import BaseTemplate from 'templates/Base'

import { GameTemplateProps } from './types'

import * as S from './styles'

const GameTemplate = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) => (
  <BaseTemplate>
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

        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title={recommendedTitle} games={recommendedGames} />
    </S.Main>
  </BaseTemplate>
)

export default GameTemplate
