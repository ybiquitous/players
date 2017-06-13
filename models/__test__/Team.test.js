import test from 'ava'
import { sequelize } from '../'

const { Team, Player } = sequelize.models

test.beforeEach(async () => {
  await Team.truncate({ cascade: true })
  await Player.truncate({ cascade: true })
})

test(async (t) => {
  const player = await Player.create({ name: 'bar' })
  const team = await Team.create({ name: 'foo' })
  await team.addPlayer(player)
  const players = await team.getPlayers()
  t.true(players.length === 1)
  t.true(players[0].id === player.id)
})
