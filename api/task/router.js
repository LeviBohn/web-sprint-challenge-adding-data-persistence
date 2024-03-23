// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Task = require('./model');

router.post('/', async (req, res) => {
    try {
        const taskData = req.body;
        if (!taskData.task_description || !taskData.project_id) {
            return res.status(400).json({ message: 'Task description and project ID are required' });
        }

        const newTask = await Task.createTask(taskData);
        res.status(201).json(newTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create task" });
    }
});

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.getTasks();
        res.status(200).json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve tasks" });
    }
});

module.exports = router;