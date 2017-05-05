import test from 'ava'
import { sequelize, Team, Player } from '../'

test.beforeEach(async () => {
  await sequelize.drop()
  await sequelize.sync()
})

test(async (t) => {
  const player = await Player.create({ name: 'bar' })
  const team = await Team.create({ name: 'foo' })
  await team.addPlayer(player)
  const players = await team.getPlayers()
  t.true(players.length === 1)
  t.true(players[0].id === player.id)
})
