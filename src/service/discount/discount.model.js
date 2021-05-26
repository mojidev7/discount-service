const { DataTypes, Model } = require('sequelize')
const { db } = require('./../../system/config/db.config')

class Discount extends Model {}

Discount.init({
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discountableType: {
    type: DataTypes.STRING
  },
  discountableId: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize: db, modelName: 'Discount'
})

module.exports = { Discount }
