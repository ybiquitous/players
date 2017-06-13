const { sequelize } = require('../models')

const { argv } = process

if (argv.includes('sync')) {
  sequelize.sync({ force: true }).then(() => process.exit())
} else if (argv.includes('drop')) {
  sequelize.drop().then(() => process.exit())
}
