require("dotenv").config()
require("colors")
const express = require("express")
const products = require("./routes/products")
const orders = require("./routes/orders")
const errorHandlerMiddleware = require("./middleware/errorHandler")
const notFoundMiddleware = require("./middleware/notFound")
const connectDB = require("./db/connect")
const app = express()

// midleware
app.use(express.json())

// routes
app.use("/api/v1/products", products)
app.use("/api/v1/orders", orders)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.URL).then(() => {
      console.log("DB_Connected!".cyan)
    })

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`.yellow.bold)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
