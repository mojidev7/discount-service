const { DataTypes, Model } = require('sequelize')
const { db } = require('./../../system/config/db.config')

class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: db, modelName: 'Category'
})

module.exports = { Category }
