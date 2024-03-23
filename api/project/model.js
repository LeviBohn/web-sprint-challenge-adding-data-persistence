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
    try {
        const [projectId] = await db('projects').insert(projectData);
        const newProject = await db('projects').where({ project_id: projectId }).first();
        const newProjectWithBooleanCompleted = {
            ...newProject,
            project_completed: newProject.project_completed === 1 ? true : false
        };
        return newProjectWithBooleanCompleted;
    } catch (error) {
        throw new Error('Failed to create project');
    }
}

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
};