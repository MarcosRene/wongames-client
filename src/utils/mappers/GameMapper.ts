import { queryGames_games_data as QueryGamesData } from 'graphql/__genereted__/queryGames'

import formatCurrency from 'utils/formatCurrency'

class GameMapper {
  toDomain(persistenceGame: QueryGamesData) {
    return {
      title: persistenceGame.attributes?.name,
      img: `http://localhost:1337${persistenceGame.attributes?.cover?.data?.attributes?.url}`,
      price: formatCurrency(Number(persistenceGame.attributes?.price)),
      developers: persistenceGame.attributes?.developers?.data.map(
        (developer) => ({
          name: developer.attributes?.name
        })
      )
    }
  }
}

export default new GameMapper()
