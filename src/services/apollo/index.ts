import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

import { constants as c } from 'constants/index'

let apolloClient: ApolloClient<NormalizedCacheObject>

export const createApolloClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({ uri: c.APOLLO_CLIENT_URI }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          games: concatPagination()
        }
      }
    }
  })
})

export const initializeApollo = (initialState = {}) => {
  const apolloClientGlobal = apolloClient ?? createApolloClient

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') {
    return apolloClientGlobal
  }

  apolloClient = apolloClient ?? createApolloClient

  return apolloClient
}

export const useApollo = (initialState = {}) =>
  useMemo(() => initializeApollo(initialState), [initialState])
