module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  })
  Team.associate = ({ Player, PlayerTeam }) => {
    Team.belongsToMany(Player, { through: PlayerTeam })
  }
  return Team
}
