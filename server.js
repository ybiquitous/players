const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.get('*', (req, res) => handle(req, res))

  const port = process.env.PORT
  server.listen(port, (err) => {
    if (err) throw err
    if (dev) process.stdout.write(`> Ready on http://localhost:${port}\n`)
  })
})
