import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'

import { GameCardProps } from 'components/GameCard/types'
import { HighlightProps } from 'components/Highlight/types'

export type ShowcaseProps = Partial<{
  title: string
  highlight: HighlightProps
  games: GameCardProps[]
  color: 'black' | 'white'
}>

const Showcase = ({
  title,
  highlight,
  games,
  color = 'white'
}: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

export default Showcase
