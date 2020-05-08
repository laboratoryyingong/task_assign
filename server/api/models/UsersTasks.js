const DbService = require('../services/DbService');
const { DataTypes } = require("sequelize");

class UsersTasks{

  constructor() {

    this._attributes = {
      user_id: DataTypes.INTEGER,
      task_id: DataTypes.INTEGER
    }

    this._dbService = new DbService();

    this.Model = this._dbService.sequlize.define('Users_Tasks', this._attributes);

    this.Model.sync();

    this._sequlize = this._dbService.sequlize;
  }

  get sequlize() {
    return this._sequlize;
  }

}

module.exports = UsersTasks;