module.exports = (sequelize, DataTypes) => {
    const L_infor = sequelize.define('login_infor', {
      id_user:DataTypes.INTEGER,
      login: DataTypes.STRING,
      password: DataTypes.STRING,

    });

    L_infor.associate = function(models){
        L_infor.belongsTo(models.user, {
            foreignKey: 'id_user',
            as: 'users'
        });
    };

    return L_infor;
  }