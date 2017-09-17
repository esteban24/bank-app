module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Charge', {
    	description: { type: DataTypes.STRING(255), allowNull: false },
    	amount: { type: DataTypes.FLOAT, allowNull: false }
	},
	{
		underscored: true,
		tableName: 'charge'
	}
  )
};