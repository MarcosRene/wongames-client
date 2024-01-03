import { initializeApollo } from 'services/apollo'

import { GetGames } from 'graphql/queries/games'
import {
  QueryGames,
  QueryGamesVariables
} from 'graphql/__genereted__/QueryGames'

import exploreMock from 'components/ExploreSidebar/mock'

import GamesTemplate from 'templates/Games'
import { GamesTemplateProps } from 'templates/Games/types'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: GetGames,
    variables: { limit: 15 }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: exploreMock
    }
  }
}
