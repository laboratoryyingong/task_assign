const Groups = require('../models/Groups');
const groups = new Groups();

const GroupsController = {

    create: async function (data) {

        let Groups = groups.Model;

        try {

            let group = await Groups.findOrCreate({
                where: {
                    name: data.name
                },
                defaults: {
                    name: data.name,
                    desc: data.desc
                }
            })

            return group

        } catch (error) {
            return error
        }

    },

    all: async function () {

        let Groups = groups.Model;

        try {

            let group = await Groups.findAll()

            return group

        } catch (error) {
            return error
        }

    },

}

module.exports = GroupsController;