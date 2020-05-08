const DbService = require('../services/DbService');
const { DataTypes } = require("sequelize");

class Tasks {

  constructor() {

    this._attributes = {
      name: DataTypes.TEXT,
      desc: DataTypes.TEXT,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      types: DataTypes.TEXT
    }

    this._dbService = new DbService();

    this.Model =  this._dbService.sequlize.define('Tasks', this._attributes);

    this.Model.sync();
    
    this._sequlize = this._dbService.sequlize;
  }

  get sequlize() {
    return this._sequlize;
  }

}

module.exports = Tasks;