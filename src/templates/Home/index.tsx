import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Showcase from 'components/Showcase'

import Base from 'templates/Base'

import * as S from './styles'

import { HomeTemplateProps } from './types'

const Home = ({
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
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="news" games={newGames} />
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
  </Base>
)

export default Home
