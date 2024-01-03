import { QueryHookOptions, useQuery } from '@apollo/client'

import {
  QueryGames,
  QueryGamesVariables
} from 'graphql/__genereted__/QueryGames'
import { GetGames } from 'graphql/queries/games'

export function useQueryGames(
  options?: QueryHookOptions<QueryGames, QueryGamesVariables>
) {
  const query = useQuery<QueryGames, QueryGamesVariables>(GetGames, options)

  return {
    ...query
  }
}
