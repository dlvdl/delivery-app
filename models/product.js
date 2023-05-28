const mongoose = require("mongoose")

const ProductScema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name of the product"],
    maxLength: [50, "Name cannot be longer than 50 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please provide the price of the product"],
    maxLength: [50, "Price cannot be longer than 50 characters"],
  },
  company: {
    type: String,
    required: [true, "Please provide the name of the company"],
    maxLength: [50, "Price cannot be longer than 50 characters"],
  },
  image: {
    type: String,
    required: [true, "Please provide the image"],
  },
})

module.exports = mongoose.model("Product", ProductScema)
