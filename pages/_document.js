import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server' // eslint-disable-line import/no-extraneous-dependencies

const css = `
  body {
    margin: 0;
    padding: 0;
  }

  main {
    max-width: 960px;
    margin: 0 auto;
    padding: 10px;
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Players</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <style>{css}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
