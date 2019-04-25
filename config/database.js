const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('postgres', 'postgres', 'buraki', {
  host: '192.168.74.10',
  dialect: 'postgres',
  operatorsAliases: false,
  port: '8002',
  schema:'buraki',

  freezeTableName: true,
  define: { //Desabilita uso do time na db, evitando erro com 'CreateAt'
    timestamps: false
  },
  
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});