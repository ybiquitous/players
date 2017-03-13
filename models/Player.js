module.exports = (sequelize, DataTypes) => (
  sequelize.define('Player', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  })
)
