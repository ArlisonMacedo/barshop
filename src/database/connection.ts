import knex from 'knex'
import path from 'path'

const connection = knex({
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
  // connection: {
  //   host: 'localhost',
  //   database: 'barshop',
  //   user: 'postgres',
  //   password: 'root',
  //   port: 5433
  // },
  // migrations: {
  //   directory: path.join(__dirname, "database", "migrations")
  // }
})


export default connection