const Sequelize = require('sequelize');
const db = require('../../config/database');

const User = db.define('users', { 
    id: { type: Sequelize.INTEGER , primaryKey: true}, 
    user_name: Sequelize.STRING,
    email: Sequelize.STRING,
    cpf: Sequelize.STRING,
    city: Sequelize.STRING,
    encripted_password: Sequelize.STRING
});
// User.create({ 
//     id:2,
//     user_name:'Lemuel',
//     email:'Franklin@rapariga.com',
//     cpf:'67666666666',
//     city:'Cratin',
//     encripted_password:'hahahaha' });

module.exports = User;