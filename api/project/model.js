// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAllProjects() {
    try {
        const projects = await db('projects');
        const projectsWithBooleanCompleted = projects.map(project => ({
            ...project,
            project_completed: project.project_completed === 1 ? true : false
        }));
        console.log(projectsWithBooleanCompleted);
        return projectsWithBooleanCompleted;
    } catch (error) {
        throw new Error('Failed to fetch projects');
    }
}

async function getProjectById(project_id) {
    const projectRows = await db('projects as p')
        .where('project_id', project_id);

    return projectRows;
}

async function createProject(projectData) {
    return await db('projects').insert(projectData).returning('*');
}

module.exports = {
    getAllProjects,
    createProject,
};

// class Project {
//     async getProjectById(project_id) {
//         const projectRows = await db('projects as p')
//             .where('project_id', project_id)
    
//         return projectRows
//     }

//     async createProject(projectData) {
//         return await db('projects').insert(projectData).returning('*');
//     }
// }

// async function getProjectById(project_id) {
//     const projectRows = await db('projects as p')
//         .where('project_id', project_id)

//     return projectRows
// }

// module.exports = { getProjectById }

// module.exports = new Project();

