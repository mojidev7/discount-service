
const { Discount } = require('./../../service/discount/discount.model')
const { Category } = require('./../../service/category/category.model')
const { Product } = require('./../../service/product/product.model')

// Category.hasOne(Category, {
//   foreignKey: 'parentId',
//   constraints: false,
//   as: 'subCategory'
// })

Category.belongsTo(Category, {
  foreignKey: 'parentId',
  constraints: false,
  as: 'superCategory'
})

Category.hasOne(Discount,
  {
    foreignKey: 'discountableId',
    constraints: false,
    scope: {
      discountableType: 'category'
    },
    as: 'discount'
  }
)

Discount.belongsTo(Category, {
  foreignKey: 'discountableId',
  constraints: false
})

Product.hasOne(Discount,
  {
    foreignKey: 'discountableId',
    constraints: false,
    scope: {
      discountableType: 'product'
    },
    as: 'discount'
  }
)

Discount.belongsTo(Product, {
  foreignKey: 'discountableId',
  constraints: false
})

Category.hasMany(Product, {
  foreignKey: 'categoryId',
  constraints: false,
  as: 'products'
})

Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  constraints: false,
  as: 'category'
})

module.exports = {
  Category,
  Discount,
  Product
}
