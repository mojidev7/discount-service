const dummyData = require('./../../../dummy-data.json')
const { Category, Product } = require('./../model')

const insertDummyData = () => {
  dummyData.Category.forEach(async cat => {
    try {
      const category = await Category.create(cat)
      if (cat.discount) {
        await category.createDiscount(cat.discount)
      }
    } catch (error) {
      console.log(error.toString())
    }
  })

  dummyData.Product.forEach(async prod => {
    try {
      const product = await Product.create(prod)
      if (prod.discount) {
        await product.createDiscount(prod.discount)
      }
    } catch (error) {
      console.log(error)
    }
  })
}

module.exports = { insertDummyData }
