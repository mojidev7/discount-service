const { DataTypes, Model } = require('sequelize')
const { db } = require('./../../system/config/db.config')

class Product extends Model {}

Product.init({
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

}, {
  sequelize: db, modelName: 'Product'
})

module.exports = { Product }
