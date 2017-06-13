const defaults = {
  username: 'players',
  password: 'play',
  dialect: 'postgres',
}

if (process.env.CI) {
  Object.assign(defaults, {
    username: 'postgres',
    password: '',
  })
}

module.exports = {
  development: Object.assign({}, defaults, {
    database: 'players_development',
  }),

  test: Object.assign({}, defaults, {
    database: 'players_test',
  }),

  production: {
    use_env_variable: 'DATABASE_URL',
  },
}
