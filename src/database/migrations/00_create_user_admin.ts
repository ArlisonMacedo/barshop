import Knex from 'knex'



export async function up (knex: Knex){
  return await knex.schema.createTable('user_admin', table => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('username')
    table.string('password')
  })
}

export async function down (knex: Knex){
  return await knex.schema.dropTable('user_admin')
}