const mongoose = require("mongoose")
const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name"],
    maxLength: [50, "Name cannot be longer than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide the email"],
    maxLength: [50, "Email cannot be longer than 50 characters"],
  },
  phone: {
    type: String,
    required: [true, "Please provide the phone"],
    maxLength: [50, "Phone cannot be longer than 50 characters"],
  },
  address: {
    type: String,
    required: [true, "Please provide the adress"],
    maxLength: [50, "Adress cannot be longer than 50 characters"],
  },
  totalPrice: {
    type: Number,
    required: [true, "Please provide the total price"],
    maxLength: [50, "Total price cannot be longer than 50 characters"],
  },
  order: {
    type: Object,
    required: [true, "Please provide order"],
  },
})

module.exports = mongoose.model("Order", OrderSchema)
