const Product = require("../models/product")
const asyncWrapper = require("../middleware/asyncWrapper")

const getProducts = asyncWrapper(async (req, res, next) => {
  const querryObj = {}
  const { company } = req.query
  if (company) querryObj.company = company
  let products = await Product.find(querryObj)
  res.status(200).json({ products, length: products.length })
})

const createProduct = asyncWrapper(async (req, res, next) => {
  const product = await Product.create(req.body)
  res.status(200).json({ product, msg: "Product created!" })
})

module.exports = { getProducts, createProduct }
