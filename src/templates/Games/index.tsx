import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { LIMIT } from 'constants/index'
import {
  parseQueryStringToFilter,
  parseQueryStringToFilters
} from 'utils/filter'

import { useQueryGames } from 'hooks/useQueryGames'

import ExploreSidebar from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'

import BaseTemplate from 'templates/Base'

import { GamesTemplateProps } from './types'

import * as S from './styles'

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const router = useRouter()

  const { data, fetchMore } = useQueryGames({
    variables: {
      limit: LIMIT,
      filters: parseQueryStringToFilters({
        queryString: router.query,
        filterItems
      }),
      sort: router.query.sort as string[] | null
    }
  })

  function handleFecthMoreGames() {
    fetchMore({
      variables: {
        limit: LIMIT,
        start: data?.games?.data.length
      }
    })
  }

  const handleOnFilter = useCallback(
    (items: ParsedUrlQueryInput) => {
      router.push({
        pathname: '/games',
        query: items
      })
      return
    },
    [router]
  )

  return (
    <BaseTemplate>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: router.query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleOnFilter}
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
