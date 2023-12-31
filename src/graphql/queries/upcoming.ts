import { gql } from '@apollo/client'

import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/hightlight'

export const GetUpcoming = gql`
  query QueryUpcoming($date: Date!) {
    upcomingGames: games(
      filters: { release_date: { gt: $date } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    showcase: home {
      data {
        attributes {
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
