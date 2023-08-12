import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('dailyDiet', (table) => {
        table.uuid('id').primary()
        table.text('title').notNullable()
        table.text('description').notNullable()
        table.date('date').notNullable()
        table.time('hour').notNullable()
        table.text('dietOrNot').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('dailyDiet')
}

