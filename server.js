const url = require('url')
const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const { Team } = require('./models')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.get('/api/teams', async (req, res) => {
    const query = req.query.q
    let where
    if (query) {
      where = {
        name: (query ? { like: `%${query}%` } : {}),
      }
    }
    res.json(await Team.findAll({ where }))
  })

  server.post('/api/teams', async (req, res) => {
    const { name } = req.body
    try {
      const created = await Team.create({ name })
      const createdUrl = url.format({
        protocol: req.protocol,
        host: req.get('HOST'),
        pathname: `/api/teams/${created.id}`,
      })
      res.status(201).set('Location', createdUrl).json(created)
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: err.message, errors: err.errors })
    }
  })

  server.get('*', (req, res) => handle(req, res))

  const port = process.env.PORT
  server.listen(port, (err) => {
    if (err) throw err
    if (dev) process.stdout.write(`> Ready on http://localhost:${port}\n`)
  })
})
