import { GameInfoProps } from 'components/GameInfo/types'
import { GameCardProps } from 'components/GameCard/types'
import { GalleryImagemProps } from 'components/Gallery/types'
import { GameDetailsProps } from 'components/GameDetails/types'
import { HighlightProps } from 'components/Highlight/types'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery: GalleryImagemProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedTitle: string
  recommendedGames: GameCardProps[]
}

export type StyleProps = {
  src: string
}
