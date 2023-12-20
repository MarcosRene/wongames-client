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

const QueryGetGameBySlug = gql`
  query queryGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
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

export { QueryGetGames, QueryGetGameBySlug }
