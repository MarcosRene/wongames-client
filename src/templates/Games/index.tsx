import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { LIMIT } from 'constants/index'

import { useQueryGames } from 'hooks/useQueryGames'

import ExploreSidebar from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'

import BaseTemplate from 'templates/Base'

import { GamesTemplateProps } from './types'

import * as S from './styles'

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, fetchMore } = useQueryGames({
    variables: { limit: LIMIT }
  })

  function handleFecthMoreGames() {
    fetchMore({
      variables: {
        limit: LIMIT,
        start: data?.games?.data.length
      }
    })
  }

  return (
    <BaseTemplate>
      <S.Main>
        <ExploreSidebar
          items={filterItems}
          onFilter={() => console.log('filter')}
        />

        <section>
          <Grid>
            {!!data?.games?.data &&
              data.games.data.map((game) => (
                <GameCard
                  key={game.attributes?.slug}
                  title={game.attributes?.name}
                  slug={game.attributes?.slug}
                  developer={
                    game.attributes?.developers?.data[0].attributes?.name
                  }
                  img={`http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`}
                  price={game.attributes?.price}
                />
              ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleFecthMoreGames}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </BaseTemplate>
  )
}

export default GamesTemplate
