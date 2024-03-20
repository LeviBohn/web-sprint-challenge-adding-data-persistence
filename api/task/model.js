// build your `Task` model here
const db = require('../../data/dbConfig');

class Task {
    async createTask(taskData) {
        return await db('tasks').insert(taskData).returning('*');
    }

    async getTasks() {
        return await db('tasks')
            .select('tasks.*', 'projects.project_name', 'projects.project_description')
            .join('projects', 'tasks.project_id', 'projects.project_id');
    }
}

module.exports = Task;