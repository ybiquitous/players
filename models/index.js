const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'development'
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config`)[env]

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable])
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

const basename = path.basename(module.filename)
fs
  .readdirSync(__dirname)
  .filter(file => (file !== basename) && file.endsWith('.js'))
  .forEach(file => sequelize.import(path.join(__dirname, file)))

const { models } = sequelize
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models)
  }
})

module.exports = { sequelize, Sequelize }
