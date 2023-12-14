import { Container } from 'components/Container'
import GameCard from 'components/GameCard'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'

import Base from 'templates/Base'

// import * as S from './styles'
import { WishlistTemplateProps } from './types'
import { Grid } from 'components/Grid'

const Wishlist = ({
  games,
  recommededGames,
  recommededHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>
    </Container>

    <Showcase
      title="You may like these games"
      games={recommededGames}
      highlight={recommededHighlight}
    />
  </Base>
)

export default Wishlist
