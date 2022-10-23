import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  return() {
    return (
      <Html>
        <Head>
          {/* Add external links */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}