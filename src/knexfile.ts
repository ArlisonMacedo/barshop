import path from 'path'

module.exports = {
  client: 'pg',
  connection: {
    host: 'ziggy.db.elephantsql.com',
    database: 'reqjviqj',
    user: 'reqjviqj',
    password: 'uZVghlZqSdKkbEFHPFt9mD8hvP6fJldz',
    port: 5432
  },
  migrations: {
    directory: path.join(__dirname, "database", "migrations")
  }
}