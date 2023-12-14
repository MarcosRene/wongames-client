import { GameCardProps } from 'components/GameCard/types'
import { HighlightProps } from 'components/Highlight/types'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommededGames: GameCardProps[]
  recommededHighlight: HighlightProps
}
