import Knex from 'knex'

export async function up(knex:Knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('image').notNullable()
    table.string('price').notNullable()
    table.text('description').notNullable()
    table.string('whatsapp').notNullable()
    table.string('address').notNullable()
    table.string('number').notNullable()
    table.string('category').notNullable()
    table.timestamps(true, true)
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
  })
}

export async function down(knex:Knex) {
  return await knex.schema.dropTable('products')
}