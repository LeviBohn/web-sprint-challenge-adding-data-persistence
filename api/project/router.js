// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.get('/:project_id', async (req, res, next) => {
    try {
        const { project_id } = req.params;
        const project = await Project.getProjectById(project_id);
        if (project.length === 0) {
            return res.status(404).json({ message: 'Project not found' })
        }
        res.status(200).json(project);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const [project] = await Project.createProject(req.body);
        res.status(201).json(project);
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;