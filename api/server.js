// build your server here and require it from index.js
const express = require('express');
const Project = require('./project/router');
const Resource = require('./resource/router');
const Task = require('./task/router');

const server = express();

server.use(express.json())

server.use('/api/projects', Project)
server.use('/api/resources', Resource)
server.use('/api/tasks', Task)

// server.use('*', (req, res) => {
//     res.json({ api: 'up' })
// })

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server