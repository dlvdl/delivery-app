const mongoose = require("mongoose")

const connectDB = (URL) => {
  return mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
