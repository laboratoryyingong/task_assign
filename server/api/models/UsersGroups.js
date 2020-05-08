const DbService = require('../services/DbService');
const { DataTypes } = require("sequelize");

class UsersGroups{

  constructor() {

    this._attributes = {
      user_id: DataTypes.INTEGER,
      group_id: DataTypes.INTEGER
    }

    this._dbService = new DbService();

    this.Model = this._dbService.sequlize.define('Users_Groups', this._attributes);

    this.Model.sync();
    
    this._sequlize = this._dbService.sequlize;
  }

  get sequlize() {
    return this._sequlize;
  }

}

module.exports = UsersGroups;