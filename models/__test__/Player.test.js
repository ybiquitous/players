import test from 'ava'
import { sequelize, Player } from '../'

test.beforeEach(async () => {
  await sequelize.drop()
  await sequelize.sync()
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
