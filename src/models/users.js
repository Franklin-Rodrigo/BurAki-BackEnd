const Sequelize = require('sequelize');
const db = require('../../config/database');

const User = db.define('User', { 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    encripted_password: {
        type: Sequelize.STRING
    }
});


module.exports = User;