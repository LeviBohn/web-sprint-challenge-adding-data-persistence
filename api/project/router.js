// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
    console.log('hello from projects')
    try {
        const projects = await Project.getAllProjects();
        return res.status(200).json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching projects from the database.' });
    }
});

router.post('/', async (req, res) => {
    try {
        const projectData = req.body;
        if (!projectData.project_name) {
            return res.status(400).json({ message: 'Project name is required' });
        } else {
            const newProject = await Project.createProject(projectData);
            res.status(201).json(newProject);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create project' });
    }
});

router.use((err, req, res, next) => {
    return res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;