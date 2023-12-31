import { QueryHome_sections_data as HightlightMapperProps } from 'graphql/__genereted__/QueryHome'
import { QueryRecommended_recommended_data as QueryRecommendedDataProps } from 'graphql/__genereted__/QueryRecommended'
import { QueryUpcoming_showcase_data as QueryUpcomingDataProps } from 'graphql/__genereted__/QueryUpcoming'

type SectionType =
  | 'newGames'
  | 'popularGames'
  | 'upcomingGames'
  | 'freeGames'
  | 'section'

type PersistenceHightlightProps =
  | HightlightMapperProps
  | QueryRecommendedDataProps
  | QueryUpcomingDataProps
  | undefined
  | null

class HightlightMapper {
  toDomain(
    persistenceHightlight: PersistenceHightlightProps,
    sectionType: SectionType
  ) {
    return {
      title:
        persistenceHightlight?.attributes?.[`${sectionType}`]?.highlight?.title,
      subtitle:
        persistenceHightlight?.attributes?.[`${sectionType}`]?.highlight
          ?.subtitle,
      backgroundImage: `http://localhost:1337${persistenceHightlight
        ?.attributes?.[`${sectionType}`]?.highlight?.background.data?.attributes
        ?.url}`,
      floatImage: `http://localhost:1337${persistenceHightlight?.attributes?.[
        `${sectionType}`
      ]?.highlight?.floatImage?.data?.attributes?.url}`,
      buttonLabel:
        persistenceHightlight?.attributes?.[`${sectionType}`]?.highlight
          ?.buttonLabel,
      buttonLink:
        persistenceHightlight?.attributes?.[`${sectionType}`]?.highlight
          ?.buttonLink,
      alignment:
        persistenceHightlight?.attributes?.[`${sectionType}`]?.highlight
          ?.alignment
    }
  }
}

export default new HightlightMapper()
