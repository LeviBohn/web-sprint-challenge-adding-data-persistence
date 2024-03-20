// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Task = require('./model');

router.post('/', async (req, res) => {
    try {
        const [task] = await Task.createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error adding task" });
    }
});

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error retrieving tasks" });
    }
});

module.exports = router;