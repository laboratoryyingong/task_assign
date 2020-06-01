const groups = require('express').Router();
const groupsController = require('../../../api/controllers/GroupsController');

// Group api
groups.post('/create', async function (req, res) {
    if (req.method === 'POST') {

        let data = {
            name: "group1",
            desc: "group 1 description"
        }

        let group = await groupsController.create(data);
        return res.json(group);

    } else {

        return res.json({
            'error': "Bad request for /groups/create, please use POST method"
        });
    }
})

groups.get('/all', async function (req, res) {
    if (req.method === 'GET') {

        let group = await groupsController.all();
        return res.json(group);

    } else {

        return res.json({
            'error': "Bad request for /groups/all, please use GET method"
        });
    }
})

module.exports = groups;