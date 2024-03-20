// build your `Resource` model here
const db = require('../../data/dbConfig');

class Resource {
    async createResource(resourceData) {
        return await db('resources').insert(resourceData).returning('*');
    }

    async getResources() {
        return await db('resources');
    }
}

module.exports = Resource;