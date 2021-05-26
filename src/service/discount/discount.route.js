const express = require('express')
const { calculateDiscount } = require('./discount.controller')
const router = express.Router()

router.post('/discount', calculateDiscount)

module.exports = { router }
