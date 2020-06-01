const Tasks = require('../models/Tasks');
const tasks = new Tasks();

const TasksGroups = require('../models/TasksGroups');
const tasksGroups = new TasksGroups();

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

    assignToGroup: async function(data) {

        let TasksGroups = tasksGroups.Model;

        try {

            let tasksGroups = await TasksGroups.findOrCreate({
                where: {
                    task_id: data.task_id,
                    group_id: data.group_id
                },
                defaults: {
                    task_id: data.task_id,
                    group_id: data.group_id
                }
            })

            return tasksGroups

        } catch (error) {
            return error
        }
    },

}

module.exports = TasksController;