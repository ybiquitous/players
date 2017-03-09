import Document, { Head, Main, NextScript } from 'next/document'

const style = `
      body {
        color: #444;
        font-size: 16px;
        margin: 0 auto;
        max-width: 500px;
        padding: 0.5em;
        text-align: center;
      }

      footer {
        margin: 2em;
      }

      small {
        font-size: inherit;
      }

      a:link, a:visited {
        color: blue;
        text-decoration: none;
      }

      a:hover {
        cursor: pointer;
        text-decoration: underline;
      }
`

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Players</title>
          <style>{style}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
