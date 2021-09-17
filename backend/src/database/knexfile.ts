import { Knex } from 'knex'

interface IKnexConfig {
  [key: string]: Knex.Config
}

const config: IKnexConfig = {

  development: {
    client: 'pg',
    connection: {
      database: 'weather_search',
      user: 'postgres',
      password: '0703'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`
    }
  }
};

export default config