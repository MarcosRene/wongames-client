import { gql } from '@apollo/client'

const QueryGetGames = gql`
  query queryGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
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

export { QueryGetGames }
