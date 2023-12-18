import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'

import BaseTemplate from 'templates/Base'

import { GamesTemplateProps } from './types'

import * as S from './styles'

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => (
  <BaseTemplate>
    <S.Main>
      <ExploreSidebar
        items={filterItems}
        onFilter={() => console.log('filter')}
      />

      <section>
        <Grid>
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </Grid>

        <S.ShowMore role="button" onClick={() => console.log('show more')}>
          <p>Show More</p>
          <ArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </BaseTemplate>
)

export default GamesTemplate
