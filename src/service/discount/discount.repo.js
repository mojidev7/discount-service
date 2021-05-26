const { productFinder } = require('./../product/product.repo')

const discountFinder = async (code) => {
  const product = await productFinder(code)
  if (!product) throw String('cant find product')

  if (product.discount) {
    return product.discount
  }

  console.log(product.category)
  if (product.category) {
    if (product.category.discount) { return product.category.discount }
    if (product.category.superCategory && product.category.superCategory.discount) {
      return product.category.superCategory.discount
    }
  }

  return null
}

const discountChecker = async (productCode, discountCode) => {
  const discount = await discountFinder(productCode)
  if (!discount) return null

  if (discount.code === discountCode) {
    return discount.discount
  }
}

module.exports = { discountChecker }
