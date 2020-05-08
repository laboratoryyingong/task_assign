const users = require('express').Router();
const usersController = require('../../api/controllers/UsersController');

// user api
users.get('/:userId', async function (req, res) {

    if (req.method === 'GET') {
        let user = await usersController.getUser(req.params.userId);
        return res.json(user);
    } else {
        console.log("[UsersController.getUser] Bad request, please user GET method.");
        return res.json({
            'error': "Bad request for /users/:userId, please use GET method"
        });
    }

})

users.get('/email/:userEmail', async function (req, res) {

    if (req.method === 'GET') {
        let user = await usersController.getUserWithEmail(req.params.userEmail);
        return res.json(user);
    } else {
        console.log("[UsersController.userEmail] Bad request, please user GET method.");
        return res.json({
            'error': "Bad request for /users/email/:userEmail, please use GET method"
        });
    }

})

users.post('/create', async function (req, res) {
    if (req.method === 'POST') {

        let data = {
            email: 'John Doe',
            password: '123',
            name: 'John',
            is_manager: true
        }

        let user = await usersController.createUser(data);
        return res.json(user);

    } else {
        console.log("[UsersController.createUser] Bad request, please user POST method.");
        return res.json({
            'error': "Bad request for /users/create, please use POST method"
        });
    }

})

users.post('/login', async function (req, res) {

    if (req.method === 'POST') {

        let isAuth = false;

        let data = {
            email: 'John Doe',
            password: '123'
        }

        let user = await usersController.login(data);

        if (user) isAuth = true

        let message = isAuth ? "success" : "fail"

        return res.json({
            "message": message
        });

    } else {
        console.log("[UsersController.login] Bad request, please user POST method.");
        return res.json({
            'error': "Bad request for /login, please use POST method"
        });
    }

})

users.post('/assign', async function (req, res) {
    if (req.method === 'POST') {

        let data = {
            user_id: 1,
            group_id: 1
        }

        let user = await usersController.assignToGroup(data);
        return res.json(user);

    } else {
        return res.json({
            'error': "Bad request for /users/assign, please use POST method"
        });
    }
})

module.exports = users;