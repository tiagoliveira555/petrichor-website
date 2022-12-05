import type { AppProps } from "next/app"
import { GlobalStyle } from "../../styles/global"

import { Provider as NextauthProvider } from "next-auth/client"
import { Session } from "next-auth"

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session
}>) {
  return (
    <>
      <NextauthProvider session={pageProps.session}>
        <Component {...pageProps} />
        <GlobalStyle />
      </NextauthProvider>
    </>
  )
}

export default MyApp
