// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resource = require('./model');

router.post('/', async (req, res) => {
    try {
        const [resource] = await model.createResource(req.body);
        res.status(201).json(resource);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error adding resource" });
    }
});

router.get('/', async (req, res) => {
    try {
        const resources = await Resource.getResources();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving resources" });
    }
});

module.exports = router;