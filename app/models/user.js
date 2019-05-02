const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING
    });
  
    return User;
  }