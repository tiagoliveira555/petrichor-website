import Document, { Html, Head, Main, NextScript } from 'next/document'
import { TRUE } from 'sass'

export default class MyDocument extends Document {
  return() {
    return (
      <Html>
        <Head>
          {/* Add the Inter Font: SemiBold, Bold and ExtraBold */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}