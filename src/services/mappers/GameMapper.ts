import formatCurrency from 'utils/formatCurrency'

type Image = {
  data: {
    attributes: {
      url: string
    }
  }
}

type Developer = {
  data: {
    attributes: {
      name: string
    }
  }[]
}

export interface PersistenceGameProps {
  attributes: {
    name: string
    cover: Image
    price: string
    developers: Developer
  }
}

class GameMapper {
  toDomain(persistenceGame: PersistenceGameProps) {
    return {
      title: persistenceGame.attributes.name,
      img: `http://localhost:1337${persistenceGame.attributes.cover.data.attributes.url}`,
      price: formatCurrency(Number(persistenceGame.attributes.price)),
      developers: persistenceGame.attributes.developers.data.map(
        (developer) => ({
          name: developer.attributes.name
        })
      )
    }
  }
}

export default new GameMapper()
