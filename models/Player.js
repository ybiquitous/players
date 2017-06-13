module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  })
  Player.associate = ({ Team, PlayerTeam }) => {
    Player.belongsToMany(Team, { through: PlayerTeam })
  }
  return Player
}
