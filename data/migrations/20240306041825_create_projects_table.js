/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function (knex) {
  await knex.schema
    .createTable('projects', table => {
      table.increments('project_id').primary()
      table.string('project_name').notNullable()
      table.string('project_description')
      table.integer('project_completed').defaultTo(0)
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('projects')
};
