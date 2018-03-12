import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import '../app/globalStyles'

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    /* eslint-disable */
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    /* eslint-enable */
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Playing with NextJS</title>
          <meta charSet="utf-8" />
          <meta name="description" content="That's it!" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
