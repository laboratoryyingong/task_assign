const DbService = require('../services/DbService');
const { DataTypes } = require("sequelize");

class Groups {

  constructor() {

    this._attributes = {
      name: DataTypes.TEXT,
      desc: DataTypes.TEXT,
    }

    this._dbService = new DbService();

    this.Model = this._dbService.sequlize.define('groups', this._attributes);

    this.Model.sync();

    this._sequlize = this._dbService.sequlize;

  }

  get sequlize() {
    return this._sequlize;
  }

}

module.exports = Groups;