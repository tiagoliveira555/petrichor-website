import type { AppProps } from 'next/app'
import { GlobalStyle } from '../../styles/global'
import '../components/Menubar/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>  
  ) 
}

export default MyApp
