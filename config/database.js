const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('postgres', 'postgres', 'buraki', {
  host: '192.168.74.10',
  dialect: 'postgres',
  port: '8002',
  

});