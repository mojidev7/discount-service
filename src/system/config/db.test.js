/* eslint-disable no-undef */
const { db } = require('./db.config')
const { Category } = require('./../../service/category/category.model')

beforeAll(async () => {
  await db.sync({ force: true })
})

test('create category', async () => {
  expect.assertions(1)
  const category = await Category.create({
    id: 1,
    name: 'test',
    discount: 12.5,
    parentId: 0
  })
  expect(category.id).toEqual(1)
})

test('get category', async () => {
  expect.assertions(2)
  const category = await Category.findByPk(1)
  expect(category.name).toEqual('test')
  expect(category.discount).toEqual(12.5)
})

test('delete category', async () => {
  expect.assertions(1)
  await Category.destroy({
    where: {
      id: 1
    }
  })
  const category = await Category.findByPk(1)
  expect(category).toBeNull()
})

afterAll(async () => {
  await db.close()
})
