import { useMemo } from 'react'
import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'

import { constants as c } from 'constants/index'

import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

export const createApolloClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({ uri: c.APOLLO_CLIENT_URI }),
  cache: apolloCache
})

export const initializeApollo = (initialState = null) => {
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

export const useApollo = (initialState = null) =>
  useMemo(() => initializeApollo(initialState), [initialState])
