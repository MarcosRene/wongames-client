import { initializeApollo } from 'services/apollo'
import GameMapper from 'utils/mappers/GameMapper'

import { QueryGetGames } from 'graphql/queries/games'
import {
  queryGames as QueryGames,
  queryGamesVariables as QueryGamesVariables
} from 'graphql/__genereted__/queryGames'

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
    query: QueryGetGames,
    variables: { limit: 9 }
  })

  const games = allGames?.data.map((game) => {
    return GameMapper.toDomain(game)
  })

  return {
    props: {
      games,
      filterItems: exploreMock,
      revalidate: 60
    }
  }
}
