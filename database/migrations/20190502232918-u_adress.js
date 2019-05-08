

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('u_adres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_user:{
        allowNull:false,
        type: DataTypes.INTEGER,
      },
      st_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      house_number:{
        allowNull:false,
        type: DataTypes.STRING,
      },
      cep: {
        allowNull: false,
        type: DataTypes.STRING,
      },


    });
  },

  down: (queryInterface, DataTypes) => {
  
      return queryInterface.dropTable('u_adres');
 
  }
};
