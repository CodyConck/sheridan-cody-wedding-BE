const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const mongoString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.txogq.mongodb.net/sheridan-cody-wedding-be?retryWrites=true&w=majority`

mongoose.connect(mongoString, { useNewUrlParser: true })

mongoose.connection.on("error", function (error) {
    console.log(error)
})

mongoose.connection.on("open", function () {
    console.log("Connected to MongoDB database.")
})