const Users = require('../models/Users');
const users = new Users();

const UsersGroups = require('../models/UsersGroups');
const usersGroups = new UsersGroups();

const UsersTasks = require('../models/UsersTasks');
const usersTasks = new UsersTasks();

const UsersController = {

    getUserWithEmail: async function (email) {

        let Users = users.Model;
        
        try {
            let user = await Users.findOne({
                where: {
                    email: email
                }
            });
            return user

        } catch (error) {
            return error
        }
    },

    getUser: async function (id) {

        let Users = users.Model;

        try {
            let user = await Users.findOne({
                where: {
                    id: id
                }
            });
            return user

        } catch (error) {
            return error
        }
    },

    all: async function () {

        let Users = users.Model;

        try {

            let user = await Users.findAll()

            return user

        } catch (error) {
            return error
        }

    },

    createUser: async function (data) {


        let Users = users.Model;

        try {

            let user = await Users.findOrCreate({
                where: {
                    email: data.email
                },
                defaults: {
                    email: data.email,
                    password: data.password,
                    name: data.name,
                    is_manager: data.is_manager
                }
            })

            return user

        } catch (error) {
            return error
        }
    },

    login: async function(data) {

        let Users = users.Model;

        try {

            let user = await Users.findOne({
                where: {
                    email: data.email,
                    password: data.password
                }
            });

            return user

        } catch (error) {
            return error
        }
    },

    assignToGroup: async function(data) {

        let UsersGroups = usersGroups.Model;

        try {

            let usersGroups = await UsersGroups.findOrCreate({
                where: {
                    user_id: data.user_id,
                    group_id: data.group_id
                },
                defaults: {
                    user_id: data.user_id,
                    group_id: data.group_id
                }
            })

            return usersGroups

        } catch (error) {
            return error
        }
    },

    assignToTask: async function(data) {

        let UsersTasks = usersTasks.Model;

        try {

            let usersTasks = await UsersTasks.findOrCreate({
                where: {
                    user_id: data.user_id,
                    task_id: data.task_id
                },
                defaults: {
                    user_id: data.user_id,
                    task_id: data.task_id
                }
            })

            return usersTasks

        } catch (error) {
            return error
        }
    },
}

module.exports = UsersController;