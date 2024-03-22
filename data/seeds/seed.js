const db = require('../dbConfig');

const projects = [
    { project_name: 'Project A', project_description: 'Description A', project_completed: false },
    { project_name: 'Project B', project_description: 'Description B', project_completed: true },
];

const resources = [
    { resource_name: 'Resource A', resource_description: 'Resource Description A' },
    { resource_name: 'Resource B', resource_description: 'Resource Description B' },
];

const tasks = [
    { task_description: 'Task A', task_notes: 'Task Notes A', task_completed: false, project_id: 1 },
    { task_description: 'Task B', task_notes: 'Task Notes B', task_completed: true, project_id: 2 },
];

exports.seed = async function (knex) {
    await db('projects').insert(projects);
    await db('resources').insert(resources);
    await db('tasks').insert(tasks);
    console.log('Data seeded successfully.');
};