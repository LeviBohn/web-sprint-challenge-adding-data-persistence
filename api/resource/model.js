// build your `Resource` model here
const db = require('../../data/dbConfig');

async function createResource(resourceData) {
    try {
        const [resourceId] = await db('resources').insert(resourceData).returning('resource_id');
        const newResource = await db('resources').where({ resource_id: resourceId }).first();
        return newResource;
    } catch (error) {
        throw new Error('Failed to create resource');
    }
}

module.exports = {
    createResource,
};