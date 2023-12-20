import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { useApollo } from 'services/apollo'

import { GlobalStyles } from 'styles/global'
import theme from 'styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Won Games</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="The best Games Store in the world!"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
