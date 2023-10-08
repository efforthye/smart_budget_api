'use strict';

import Sequelize from 'sequelize';
import User from './models/user.js';
import configJson from '../config/mysql.json' assert { type: 'json' };

const { NODE_ENV } = process.env;
const config = configJson[NODE_ENV || 'development'];

const db = {
  User,
};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

User.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
