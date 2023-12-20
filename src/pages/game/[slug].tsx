import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import {
  queryGames as QueryGames,
  queryGamesVariables as QueryGamesVariables
} from 'graphql/__genereted__/queryGames'
import {
  queryGameBySlug as QueryGameBySlug,
  queryGameBySlugVariables as QueryGameBySlugVariables
} from 'graphql/__genereted__/queryGameBySlug'
import { QueryGetGameBySlug, QueryGetGames } from 'graphql/queries/games'

import { initializeApollo } from 'services/apollo'

import formatCurrency from 'utils/formatCurrency'
import formatedDate from 'utils/date'

import GameTemplate from 'templates/Game'
import { GameTemplateProps } from 'templates/Game/types'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <GameTemplate {...props} />
}

export async function getStaticPaths() {
  const {
    data: { games }
  } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QueryGetGames,
    variables: { limit: 9 }
  })

  const paths = games?.data.map(({ attributes }) => ({
    params: { slug: attributes?.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: { games }
  } = await apolloClient.query<QueryGameBySlug, QueryGameBySlugVariables>({
    query: QueryGetGameBySlug,
    variables: { slug: params?.slug as string }
  })

  if (!games?.data.length) return { notFound: true }

  const currentGame = games.data[0]

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${currentGame.attributes?.cover?.data?.attributes?.src}`,
      gameInfo: {
        title: currentGame.attributes?.name,
        price: currentGame.attributes?.price,
        description: currentGame.attributes?.short_description
      },
      gallery: currentGame.attributes?.gallery?.data.map((gallery) => ({
        src: `http://localhost:1337${gallery.attributes?.src}`,
        label: gallery.attributes?.label
      })),
      description: currentGame.attributes?.description,
      details: {
        developer: currentGame.attributes?.developers?.data[0].attributes?.name,
        releaseDate: formatedDate(currentGame.attributes?.release_date),
        platforms: currentGame.attributes?.platforms?.data.map(
          (platform) => platform.attributes?.name
        ),
        publisher: currentGame.attributes?.publisher?.data?.attributes?.name,
        rating: currentGame.attributes?.rating,
        genres: currentGame.attributes?.categories?.data.map(
          (catetory) => catetory.attributes?.name
        )
      },
      UpcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
