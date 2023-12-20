import { gql } from '@apollo/client'

import { initializeApollo } from 'services/apollo'
import GameMapper, { PersistenceGameProps } from 'services/mappers/GameMapper'

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
  } = await apolloClient.query({
    query: gql`
      query QueryGames {
        games {
          data {
            attributes {
              slug
              name
              cover {
                data {
                  attributes {
                    url
                  }
                }
              }
              price
              developers {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `
  })

  const games = allGames.data.map((game: PersistenceGameProps) => {
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
