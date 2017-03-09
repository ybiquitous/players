module.exports = (sequelize, DataTypes) => (
  sequelize.define('Player', {
    name: DataTypes.STRING,
  })
)
