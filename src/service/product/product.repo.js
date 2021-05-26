const { Discount, Category, Product } = require('./../../system/model')

const productFinder = (code) => {
  return Product.findOne({
    include: [
      {
        model: Discount,
        as: 'discount'
      },
      {
        model: Category,
        as: 'category',
        include: [
        //   {
        //     model: Category,
        //     as: 'subCategory',
        //     include: {
        //       model: Discount,
        //       as: 'discount'
        //     }
        //   },
          {
            model: Category,
            as: 'superCategory',
            include: {
              model: Discount,
              as: 'discount'
            }
          },
          {
            model: Discount,
            as: 'discount'
          }]
      }],
    where: {
      code
    }
  }
  )
}

module.exports = { productFinder }
