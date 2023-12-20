import { gql, useQuery } from '@apollo/client'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'services/apollo'

import HomeTemplate from 'templates/Home'

import { HomeTemplateProps } from 'templates/Home/types'

export default function PageRoot(props: HomeTemplateProps) {
  return props.data && JSON.stringify(props.data)
  return <HomeTemplate {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: gql`
      query getGames {
        games {
          data {
            attributes {
              name
            }
          }
        }
      }
    `
  })

  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      UpcomingGames: gamesMock,
      UpcomingHighligth: highlightMock,
      UpcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
