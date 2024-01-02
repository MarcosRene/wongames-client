import { initializeApollo } from 'services/apollo'
import GameMapper from 'utils/mappers/GameMapper'

import { GetGames } from 'graphql/queries/games'
import {
  QueryGames,
  QueryGamesVariables
} from 'graphql/__genereted__/QueryGames'

import GamesTemplate from 'templates/Games'

import { GamesTemplateProps } from 'templates/Games/types'

import exploreMock from 'components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { games: allGames }
  } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: GetGames,
    variables: { limit: 15 }
  })

  return {
    props: {
      games: GameMapper.toDomain(allGames?.data),
      filterItems: exploreMock,
      revalidate: 60
    }
  }
}
