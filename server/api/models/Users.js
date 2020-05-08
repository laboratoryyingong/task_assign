const DbService = require('../services/DbService');
const { DataTypes } = require("sequelize");

class Users {

  constructor() {

    this._attributes = {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.TEXT,
      is_manager: DataTypes.BOOLEAN
    }

    this._dbService = new DbService();

    this.Model = this._dbService.sequlize.define('users', this._attributes);

    this.Model.sync();

    this._sequlize = this._dbService.sequlize;
  }

  get sequlize() {
    return this._sequlize;
  }

}

module.exports = Users;