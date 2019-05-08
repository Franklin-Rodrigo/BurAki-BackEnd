
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      surname: DataTypes.STRING,
      cpf: DataTypes.STRING,

    });
    User.associate = function(models){
      User.hasOne(models.login_infor,    {
          foreignKey: 'id_user',
          as: 'login_infors'
      });
      User.hasOne(models.u_adre,{
        foreignKey: 'id_user',
        as: 'u_adre'
      });
  };
  
    return User;
  }