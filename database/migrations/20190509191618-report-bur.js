

module.exports = {
  up: (queryInterface, DataTypes) => {
   return queryInterface.createTable('report_bur', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_user: {
        allowNull:false,
        type: DataTypes.INTEGER,
        unique:true,
        
      },
      description: {
        allowNull:false,
        type: DataTypes.STRING,
      },
      id_img: {
        type:DataTypes.INTEGER,
      },
      status: {
        type:DataTypes.INTEGER,
      },
      severity_lvl: {
        type:DataTypes.INTEGER,
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
  
      return queryInterface.dropTable('report_bur');
  
  }
};
