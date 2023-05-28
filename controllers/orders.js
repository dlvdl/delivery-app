const Order = require("../models/order")
const asyncWrapper = require("../middleware/asyncWrapper")

const getOrders = asyncWrapper(async (req, res, next) => {
  const querryObj = {}
  let orders = await Order.find(querryObj)
  res.status(200).json({ orders, length: orders.length })
})

const createOrder = asyncWrapper(async (req, res, next) => {
  const order = await Order.create(req.body)
  res.status(200).json({ order, msg: "Order created!" })
})

module.exports = { getOrders, createOrder }
