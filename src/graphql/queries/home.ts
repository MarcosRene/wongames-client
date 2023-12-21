import { gql } from '@apollo/client'

import { BannerFragment } from 'graphql/fragments'

export const GetHome = gql`
  query QueryHome {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }
  }

  ${BannerFragment}
`
