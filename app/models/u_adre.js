

module.exports = (sequelize, DataTypes) => {
    const U_adress = sequelize.define('u_adre', {
      st_name: DataTypes.STRING,
      city_name: DataTypes.STRING,
      house_Number: DataTypes.STRING,
      cep: DataTypes.STRING,
    
    });

    U_adress.associate = function(models){
    };

    return U_adress;
  }