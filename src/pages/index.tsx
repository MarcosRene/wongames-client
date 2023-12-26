import { initializeApollo } from 'services/apollo'

import { GetHome } from 'graphql/queries/home'
import { QueryHome } from 'graphql/__genereted__/QueryHome'

import HomeTemplate from 'templates/Home'

import { HomeTemplateProps } from 'templates/Home/types'

import highlightMock from 'components/Highlight/mock'

export default function PageRoot(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export async function getStaticProps() {
  const apploClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apploClient.query<QueryHome>({
    query: GetHome
  })

  return {
    props: {
      revalidate: 60,
      banners: banners?.data.map((banner) => ({
        img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
        title: banner.attributes?.title,
        subtitle: banner.attributes?.subtitle,
        buttonLabel: banner.attributes?.button?.label,
        buttonLink: banner.attributes?.button?.link,
        ...(banner.attributes?.ribbon && {
          ribbon: banner.attributes?.ribbon?.text,
          ribbonColor: banner.attributes?.ribbon?.color,
          ribbonSize: banner.attributes?.ribbon?.size
        })
      })),
      newGamesTitle: sections?.data?.attributes?.newGames?.title,
      newGames: newGames?.data.map((newGame) => ({
        slug: newGame.attributes?.slug,
        title: newGame.attributes?.name,
        developer: newGame.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${newGame.attributes?.cover?.data?.attributes?.url}`,
        price: newGame.attributes?.price
      })),
      mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
      mostPopularHighlight: highlightMock,
      mostPopularGames:
        sections?.data?.attributes?.popularGames!.games!.data.map(
          (popularGame) => ({
            slug: popularGame.attributes?.slug,
            title: popularGame.attributes?.name,
            developer:
              popularGame.attributes?.developers?.data[0].attributes?.name,
            img: `http://localhost:1337${popularGame.attributes?.cover?.data?.attributes?.url}`,
            price: popularGame.attributes?.price
          })
        ),
      upcomingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
      upcomingGames: upcomingGames?.data.map((upcomingGame) => ({
        slug: upcomingGame.attributes?.slug,
        title: upcomingGame.attributes?.name,
        developer:
          upcomingGame.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${upcomingGame.attributes?.cover?.data?.attributes?.url}`,
        price: upcomingGame.attributes?.price
      })),
      upcomingHighlight: highlightMock,
      freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
      freeGames: freeGames?.data.map((freeGame) => ({
        slug: freeGame.attributes?.slug,
        title: freeGame.attributes?.name,
        developer: freeGame.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${freeGame.attributes?.cover?.data?.attributes?.url}`,
        price: freeGame.attributes?.price
      })),
      freeHighlight: highlightMock
    }
  }
}
