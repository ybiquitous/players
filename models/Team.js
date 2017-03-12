module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
