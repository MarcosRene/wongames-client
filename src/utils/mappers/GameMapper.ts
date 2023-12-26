import { QueryGames_games_data as GameMapperProps } from 'graphql/__genereted__/QueryGames'

class GameMapper {
  toDomain(persistenceGames: GameMapperProps[] | undefined | null) {
    return persistenceGames?.map((persistenceGame) => ({
      slug: persistenceGame.attributes?.slug,
      title: persistenceGame.attributes?.name,
      img: `http://localhost:1337${persistenceGame.attributes?.cover?.data?.attributes?.url}`,
      price: persistenceGame.attributes?.price,
      developer:
        persistenceGame.attributes?.developers?.data[0].attributes?.name
    }))
  }
}

export default new GameMapper()
