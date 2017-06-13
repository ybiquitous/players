const fetchEnv = (key, defval) => (
  (key in process.env) ? process.env[key] : defval
)

const defaults = {
  username: fetchEnv('DATABASE_USER', 'players'),
  password: fetchEnv('DATABASE_PASSWORD', 'play'),
  dialect: 'postgres',
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
