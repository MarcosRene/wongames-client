import { GetGames } from 'graphql/queries/games'

export const mocks = [
  {
    request: {
      query: GetGames,
      variables: { limit: 15 }
    },
    result: {
      data: {
        games: {
          data: [
            {
              attributes: {
                __typename: 'Game',
                slug: 'succubus',
                name: 'Succubus',
                price: 7.49,
                cover: {
                  data: {
                    attributes: {
                      url: '/uploads/succubus_7e7a7582f7.jpg'
                    }
                  }
                },
                developers: {
                  data: [
                    {
                      attributes: {
                        name: 'Madmind Studio'
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
]
