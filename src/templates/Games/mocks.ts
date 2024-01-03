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

export const fetchMoreMock = [
  {
    request: {
      query: GetGames,
      variables: { limit: 15, start: 1 }
    },
    result: {
      data: {
        games: {
          data: [
            {
              attributes: {
                __typename: 'Game',
                slug: 'cyberpunk_2077_phantom_liberty',
                name: 'Cyberpunk 2077: Phantom Liberty',
                price: 29.99,
                cover: {
                  data: {
                    attributes: {
                      url: '/uploads/cyberpunk_2077_phantom_liberty_73be46ec29.jpg'
                    }
                  }
                },
                developers: {
                  data: [
                    {
                      attributes: {
                        name: 'CD PROJEKT RED'
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
