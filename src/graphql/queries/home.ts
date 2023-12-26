import { gql } from '@apollo/client'

import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { SectionsFragment } from 'graphql/fragments/sections'

export const GetHome = gql`
  query QueryHome($date: Date!) {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(
      filters: { release_date: { lt: $date } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

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

    freeGames: games(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    sections: home {
      data {
        attributes {
          ...SectionsFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${SectionsFragment}
`
