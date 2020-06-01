const tasks = require('express').Router();
const tasksController = require('../../../api/controllers/tasksController');

// Task api
tasks.post('/create', async function (req, res) {
    if (req.method === 'POST') {

        let data = {
            name: "task 1",
            desc: "task 1 description",
            start_time: "2020-05-08T04:19:09.229Z",
            end_time: "2020-05-08T04:19:09.229Z",
            types: "normal"
        }

        let task = await tasksController.create(data);
        return res.json(task);

    } else {

        return res.json({
            'error': "Bad request for tasks/create, please use POST method"
        });
    }
})

tasks.get('/all', async function (req, res) {
    if (req.method === 'GET') {

        let task = await tasksController.all();
        return res.json(task);

    } else {
        
        return res.json({
            'error': "Bad request for tasks/all, please use GET method"
        });
    }
})

tasks.post('/assign/group', async function (req, res) {
    if (req.method === 'POST') {

        let data = {
            task_id: 1,
            group_id: 1
        }

        let task = await tasksController.assignToGroup(data);
        return res.json(task);

    } else {
        return res.json({
            'error': "Bad request for tasks/assign/group, please use POST method"
        });
    }
})

module.exports = tasks;