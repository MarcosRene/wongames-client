import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import {
  QueryGames,
  QueryGamesVariables
} from 'graphql/__genereted__/QueryGames'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/__genereted__/QueryGameBySlug'
import { GetGameBySlug, GetGames } from 'graphql/queries/games'
import { QueryRecommended } from 'graphql/__genereted__/QueryRecommended'
import { GetRecommended } from 'graphql/queries/recommended'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/__genereted__/QueryUpcoming'
import { GetUpcoming } from 'graphql/queries/upcoming'

import { initializeApollo } from 'services/apollo'

import formatedDate from 'utils/date'
import GameMapper from 'utils/mappers/GameMapper'
import HightlightMapper from 'utils/mappers/HightlightMapper'

import GameTemplate from 'templates/Game'
import { GameTemplateProps } from 'templates/Game/types'

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
    query: GetGames,
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
    query: GetGameBySlug,
    variables: { slug: params?.slug as string }
  })

  if (!games?.data.length) return { notFound: true }

  const currentGame = games.data[0]

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: GetRecommended
  })

  const {
    data: { upcomingGames, showcase }
  } = await apolloClient.query<QueryUpcoming, QueryUpcomingVariables>({
    query: GetUpcoming,
    variables: {
      date: new Date().toISOString().slice(0, 10)
    }
  })

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
      upcommingTitle: showcase?.data?.attributes?.upcomingGames?.title,
      upcomingGames: GameMapper.toDomain(upcomingGames?.data),
      upcomingHighlight: HightlightMapper.toDomain(
        showcase?.data,
        'upcomingGames'
      ),
      recommendedTitle: recommended?.data?.attributes?.section.title,
      recommendedGames: GameMapper.toDomain(
        recommended?.data?.attributes?.section.games?.data
      )
    }
  }
}
