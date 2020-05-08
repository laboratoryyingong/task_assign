const Sequelize = require('sequelize');
const path = require('path');
const appRoot = path.dirname(require.main.filename || process.mainModule.filename);

class DbService {
  constructor() {
    this._sequlize = new Sequelize('database', 'username', 'password', {
      // sqlite! now!
      dialect: 'sqlite',

      // the storage engine for sqlite
      storage: path.join(appRoot, 'db/database.sqlite'),
    });
  }

  get sequlize() {
    return this._sequlize;
  }
}

module.exports = DbService;