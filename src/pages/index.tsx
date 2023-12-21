import { initializeApollo } from 'services/apollo'

import { GetHome } from 'graphql/queries/home'
import { QueryHome } from 'graphql/__genereted__/QueryHome'

import HomeTemplate from 'templates/Home'

import { HomeTemplateProps } from 'templates/Home/types'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function PageRoot(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export async function getStaticProps() {
  const apploClient = initializeApollo()

  const {
    data: { banners, newGames }
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
      newGames: newGames?.data.map((newGame) => ({
        slug: newGame.attributes?.slug,
        title: newGame.attributes?.name,
        developer: newGame.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${newGame.attributes?.cover?.data?.attributes?.url}`,
        price: newGame.attributes?.price
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      UpcomingGames: gamesMock,
      UpcomingHighligth: highlightMock,
      UpcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
