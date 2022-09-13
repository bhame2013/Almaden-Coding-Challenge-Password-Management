import Head from "next/head"
import { AppProps } from "next/app"

import "../styles/reset.css"

import { GlobalStyle } from "../styles/global"
import { PasswordProvider } from "src/contexts/PasswordContext"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PasswordProvider>
      <Head>
        <title>Meu cofre</title>

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Almaden teste para front-end." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="origin" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="Almaden" />
        <meta name="keyboard-shortcuts-preference" content="all"></meta>
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </PasswordProvider>
  )
}

export default App;
