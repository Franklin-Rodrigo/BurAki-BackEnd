
module.exports = (sequelize, DataTypes) => {
    const Report = sequelize.define('report_bur', {
      id_user: DataTypes.INTEGER,
      id_img: DataTypes.INTEGER,
      description: DataTypes.STRING,
      status: DataTypes.INTEGER,
      severity_lvl:DataTypes.INTEGER,
    });
    return Report;
}