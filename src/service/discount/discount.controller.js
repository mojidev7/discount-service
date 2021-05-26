
const { discountChecker } = require('./discount.repo')

const calculateDiscount = async (req, res, next) => {
  try {
    const { productCode, discountCode } = req.body
    const discount = await discountChecker(productCode, discountCode)
    if (!discount) {
      return res.status(200).json({
        status: 'success',
        discount: 0
      })
    }
    return res.status(200).json({
      status: 'success',
      discount
    })
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.toString()
    })
  }
}

module.exports = { calculateDiscount }
