/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable('project_resources', function (table) {
      table.increments('project_resource_id').primary()
      table.integer('project_id').unsigned().notNullable()
      table.integer('resource_id').unsigned().notNullable()
      table.foreign('project_id').references('project_id').inTable('projects')
      table.foreign('resource_id').references('resource_id').inTable('resources')
      table.unique(['project_id', 'resource_id'])
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
};
