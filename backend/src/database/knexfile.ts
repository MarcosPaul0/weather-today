import { Knex } from 'knex'

require('dotenv').config()

interface IKnexConfig {
  [key: string]: Knex.Config
}

const config: IKnexConfig = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.POSTGRES_DATABASE_NAME,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`
    }
  }
};

export default config