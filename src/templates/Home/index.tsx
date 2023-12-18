import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Showcase from 'components/Showcase'

import BaseTemplate from 'templates/Base'

import * as S from './styles'

import { HomeTemplateProps } from './types'

const HomeTemplate = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  UpcomingGames,
  UpcomingHighligth,
  UpcomingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <BaseTemplate>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={UpcomingGames} />

      <Showcase highlight={UpcomingHighligth} games={UpcomingMoreGames} />
    </S.SectionUpcoming>

    <Showcase title="Free games" highlight={freeHighligth} games={freeGames} />
  </BaseTemplate>
)

export default HomeTemplate
