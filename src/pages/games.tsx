import { GetServerSidePropsContext } from 'next'

import { LIMIT } from 'constants/index'
import { initializeApollo } from 'services/apollo'
import { parseQueryStringToFilters } from 'utils/filter'

import { GetGames } from 'graphql/queries/games'
import {
  QueryGames,
  QueryGamesVariables
} from 'graphql/__genereted__/QueryGames'

import GamesTemplate from 'templates/Games'
import { GamesTemplateProps } from 'templates/Games/types'
import { filterItems } from 'components/ExploreSidebar/constants'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: GetGames,
    variables: {
      limit: LIMIT,
      filters: parseQueryStringToFilters({ queryString: query, filterItems }),
      sort: query.sort as string[] | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
