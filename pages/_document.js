import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import '../app/globalStyles'

// eslint-disable-next-line
class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  render() {
    // Note that stripe api is added for all pages even thought is only needed on a couple, this improves
    // detection of suspicious activities for stripe.
    return (
      <html lang="en">
        <Head>
          <title>Playing with NextJS</title>
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
