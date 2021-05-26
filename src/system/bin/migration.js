
const { db } = require('./../config/db.config')
const { insertDummyData } = require('./dummy')
require('./../model')

db.sync({ force: true }).then(() => {
  console.log('synced')
  insertDummyData()
})
