require("dotenv").config()

const connectDB = require("./db/connect")
const Product = require("./models/product")

const jsonProducts = require("./mock/products.json")

const start = async () => {
  try {
    await connectDB(process.env.URL)
    await Product.deleteMany()
    await Product.create(jsonProducts.products)
    console.log("Success!!")
  } catch (error) {
    console.log(error)
  }
}

start()
