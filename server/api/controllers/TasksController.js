const Tasks = require('../models/Tasks');
const tasks = new Tasks();

const TasksController = {

    create: async function (data) {

        let Tasks = tasks.Model;

        try {

            let task = await Tasks.findOrCreate({
                where: {
                    name: data.name
                },
                defaults: {
                    name: data.name,
                    desc: data.desc,
                    start_time: data.start_time,
                    end_time: data.end_time,
                    types: data.types
                }
            })

            return task

        } catch (error) {
            return error
        }

    },

    all: async function () {

        let Tasks = tasks.Model;

        try {

            let task = await Tasks.findAll()

            return task

        } catch (error) {
            return error
        }

    },

}

module.exports = GroupsController;