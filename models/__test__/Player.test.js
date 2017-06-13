import test from 'ava'
import { sequelize } from '../'

const { Player } = sequelize.models

test.beforeEach(async () => {
  await Player.truncate({ cascade: true })
})

test(async (t) => {
  const player = await Player.create({ name: 'bar' })
  t.true(player.name === 'bar')
})

test(async (t) => {
  try {
    await Player.create({ name: null })
  } catch (e) {
    t.true(e.message === 'notNull Violation: name cannot be null')
  }
})
