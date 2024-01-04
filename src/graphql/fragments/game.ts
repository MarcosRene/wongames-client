import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    slug
    name
    price
    cover {
      data {
        attributes {
          url
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
    platforms {
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
  }
`
