const DbService = require('../services/DbService');
const { DataTypes } = require("sequelize");

class TasksGroups{

  constructor() {

    this._attributes = {
      group_id: DataTypes.INTEGER,
      task_id: DataTypes.INTEGER,
    }

    this._dbService = new DbService();

    this.Model = this._dbService.sequlize.define('Tasks_Groups', this._attributes);

    this.Model.sync();

    this._sequlize = this._dbService.sequlize;
  }

  get sequlize() {
    return this._sequlize;
  }

}

module.exports = TasksGroups;