import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Showcase from 'components/Showcase'

import BaseTemplate from 'templates/Base'

import * as S from './styles'

import { HomeTemplateProps } from './types'

const HomeTemplate = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGamesTitle,
  upcomingGames,
  upcomingHighlight,
  freeGamesTitle,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <BaseTemplate>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighlight}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </BaseTemplate>
)

export default HomeTemplate
