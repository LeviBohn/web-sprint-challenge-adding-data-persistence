// build your `Task` model here
const db = require('../../data/dbConfig');

async function getTasks() {
    try {
        const tasks = await db('tasks');
        const tasksWithBooleanCompleted = tasks.map(task => ({
            ...task,
            task_completed: task.task_completed === 1 ? true : false
        }));
        console.log(tasksWithBooleanCompleted);
        return tasksWithBooleanCompleted;
    } catch (error) {
        throw new Error('Failed to fetch tasks');
    }
}

async function createTask(taskData) {
    try {
        const [taskId] = await db('tasks').insert(taskData);
        const newTask = await db('tasks').where({ task_id: taskId }).first();
        const newTaskWithBooleanCompleted = {
            ...newTask,
            task_completed: newTask.task_completed === 1 ? true : false
        };
        return newTaskWithBooleanCompleted;
    } catch (error) {
        throw new Error('Failed to create task');
    }
}

module.exports = {
    createTask,
    getTasks,
};