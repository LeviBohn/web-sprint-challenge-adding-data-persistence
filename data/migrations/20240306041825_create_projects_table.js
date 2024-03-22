/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema
    .createTable('projects', function (table) {
      table.increments('project_id')
      table.string('project_name').notNullable()
      table.text('project_description')
      table.boolean('project_completed').notNullable().defaultTo(false)
    });
};
          // FISH SAYS DON'T CHANGE THIS FILE ANYMORE !!
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('projects')
};
