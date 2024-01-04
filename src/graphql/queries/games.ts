import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const GetGames = gql`
  query QueryGames(
    $start: Int
    $limit: Int!
    $filters: GameFiltersInput
    $sort: [String]
  ) {
    games(
      pagination: { start: $start, limit: $limit }
      filters: $filters
      sort: $sort
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
  }

  ${GameFragment}
`

export const GetGameBySlug = gql`
  query QueryGameBySlug($slug: String!) {
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
