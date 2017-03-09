module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate({ Player }) {
        Team.belongsToMany(Player, { through: 'PlayerTeam' })
        Player.belongsToMany(Team, { through: 'PlayerTeam' })
      },
    },
  })
  return Team
}
