

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('login_infors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_user:{
        allowNull:false,
        type: DataTypes.INTEGER,
        unique:true,
        foreignKey: true,
        
      },
      login: {
        allowNull: false,
        type: DataTypes.STRING,
        unique:true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface, DataTypes) => {

      return queryInterface.dropTable('login_infors');

  }
};
