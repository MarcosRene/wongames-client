import { gql } from '@apollo/client'

import { GameFragment } from './game'
import { HighlightFragment } from './hightlight'

export const SectionsFragment = gql`
  fragment SectionsFragment on Home {
    newGames {
      title
      highlight {
        ...HighlightFragment
      }
    }
    popularGames {
      title
      highlight {
        ...HighlightFragment
      }
      games(pagination: { limit: 8 }) {
        data {
          attributes {
            ...GameFragment
          }
        }
      }
    }

    upcomingGames {
      title
      highlight {
        ...HighlightFragment
      }
    }
    freeGames {
      title
      highlight {
        ...HighlightFragment
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
