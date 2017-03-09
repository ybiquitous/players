import test from 'ava'
import { sequelize, Team, Player } from '../'

test.beforeEach(() => {
  sequelize.drop()
  sequelize.sync()
})

test(async (t) => {
  const player = await Player.create({ name: 'bar' })
  const team = await Team.create({ name: 'foo' })
  await team.addPlayer(player)
})
