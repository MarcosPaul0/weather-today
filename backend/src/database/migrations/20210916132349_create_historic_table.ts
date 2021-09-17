import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('historic', (table: Knex.TableBuilder) => {
    table.increments('id'),
    table.text('city').unique().notNullable(),
    table.integer('count').notNullable(),
    table.timestamp('searched_at').notNullable().defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('historic')
}

