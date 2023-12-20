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

  const descriptionHTML = `
    <img src="https://items.gog.com/not_a_cp/ENG_product-page-addons-2020_yellow_on_black.png"><br>
    * Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams will be available in English only.
    <hr><p class="module">Korean Voiceover will be added on 11th December 2020.</p><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-About-the-Game.png"><br><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
    <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png"><br><br>
    Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.
    <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-City-of-the-Future.png"><br><br>
    Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.
    <br><br><img alt="" src="https://items.gog.com/not_a_cp/EN/EN-Eternal-Life.png"><br><br>
    Take the riskiest job of your life and go after a prototype implant that is the key to immortality.


    <p class="description__copyrights">
    CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
    CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
    respective owners.
  </p>`

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
