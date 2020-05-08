const groups = require('express').Router();
const groupsController = require('../../api/controllers/GroupsController');

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
        console.log("[GroupsController.create] Bad request, please user POST method.");
        return res.json({
            'error': "Bad request for /group/create, please use POST method"
        });
    }
})

groups.get('/all', async function (req, res) {
    if (req.method === 'GET') {

        let group = await groupsController.all();
        return res.json(group);

    } else {
        console.log("[GroupsController.all] Bad request, please user GET method.");
        return res.json({
            'error': "Bad request for /group/all, please use GET method"
        });
    }
})

module.exports = groups;