import { initializeApollo } from 'services/apollo'

import { GetHome } from 'graphql/queries/home'
import { QueryHome, QueryHomeVariables } from 'graphql/__genereted__/QueryHome'

import BannerMapper from 'utils/mappers/BannerMapper'
import GameMapper from 'utils/mappers/GameMapper'
import HightlightMapper from 'utils/mappers/HightlightMapper'

import HomeTemplate from 'templates/Home'
import { HomeTemplateProps } from 'templates/Home/types'

export default function PageRoot(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export async function getStaticProps() {
  const apploClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apploClient.query<QueryHome, QueryHomeVariables>({
    query: GetHome,
    variables: {
      date: new Date().toISOString().slice(0, 10) // For example -> 2023-12-26
    }
  })

  return {
    props: {
      revalidate: 60,
      banners: BannerMapper.toDomain(banners?.data),
      newGamesTitle: sections?.data?.attributes?.newGames?.title,
      newGames: GameMapper.toDomain(newGames?.data),
      mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
      mostPopularHighlight: HightlightMapper.toDomain(
        sections?.data,
        'popularGames'
      ),
      mostPopularGames: GameMapper.toDomain(
        sections?.data?.attributes?.popularGames!.games!.data
      ),
      upcomingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
      upcomingGames: GameMapper.toDomain(upcomingGames?.data),
      upcomingHighlight: HightlightMapper.toDomain(
        sections?.data,
        'upcomingGames'
      ),
      freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
      freeGames: GameMapper.toDomain(freeGames?.data),
      freeHighlight: HightlightMapper.toDomain(sections?.data, 'freeGames')
    }
  }
}
