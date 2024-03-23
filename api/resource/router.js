// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resource = require('./model');

router.post('/', async (req, res) => {
    try {
        const resourceData = req.body;
        if (!resourceData.resource_name) {
            return res.status(400).json({ message: 'Resource name is required' });
        }

        const newResource = await Resource.createResource(resourceData);
        res.status(201).json(newResource);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create resource" });
    }
});

router.get('/', async (req, res) => {
    try {
        const resources = await Resource.getResources();
        res.status(200).json(resources);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve resources" });
    }
});

module.exports = router;