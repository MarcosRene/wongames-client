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
  upcomingGames,
  upcomingHighligth,
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
      <Showcase title="News" games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title="Upcoming"
      games={upcomingGames}
      highlight={upcomingHighligth}
    />

    <Showcase title="Free games" highlight={freeHighligth} games={freeGames} />
  </BaseTemplate>
)

export default HomeTemplate
