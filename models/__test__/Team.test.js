import test from 'ava'
import { sequelize, Team, Player } from '../'

test.beforeEach(async () => {
  await sequelize.drop()
  await sequelize.sync()
})

test(async () => {
  const player = await Player.create({ name: 'bar' })
  const team = await Team.create({ name: 'foo' })
  await team.addPlayer(player)
})
