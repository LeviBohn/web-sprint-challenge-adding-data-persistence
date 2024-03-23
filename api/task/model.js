// build your `Task` model here
const db = require('../../data/dbConfig');

async function createTask(taskData) {
    try {
        const [taskId] = await db('tasks').insert(taskData).returning('task_id');
        const newTask = await db('tasks').where({ task_id: taskId }).first();
        return newTask;
    } catch (error) {
        throw new Error('Failed to create task');
    }
}

module.exports = {
    createTask,
};