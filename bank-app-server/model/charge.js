module.exports = function(sequelize, DataTypes) {
  return sequelize.define('charge', {
    description: DataTypes.STRING(255),
    amount: DataTypes.FLOAT
  })
};