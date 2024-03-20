// build your `Project` model here
const db = require('../../data/dbConfig')

class Project {
    async getProjectById(project_id) {
        const projectRows = await db('projects as p')
            .where('project_id', project_id)
    
        return projectRows
    }

    async createProject(projectData) {
        return await db('projects').insert(projectData).returning('*');
    }
}

// async function getProjectById(project_id) {
//     const projectRows = await db('projects as p')
//         .where('project_id', project_id)

//     return projectRows
// }

// module.exports = { getProjectById }

module.exports = new Project();