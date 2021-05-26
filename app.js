const express = require('express')
const { router } = require('./src/service/discount/discount.route')
const app = express()

app.use(express.json())
app.use('/api/v1', router)

// app.listen(8080)

module.exports = app
