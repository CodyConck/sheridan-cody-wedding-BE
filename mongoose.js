const mongoose = require("mongoose")

const mongoString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.txogq.mongodb.net/sheridan-cody-wedding-be?retryWrites=true&w=majority`

const setUp = async () => {
    await mongoose.connect(mongoString, { useNewUrlParser: true })
} 

mongoose.connection.on("error", function (error) {
    console.log(error)
})

mongoose.connection.on("open", function () {
    console.log("Connected to MongoDB database.")
})

mongoose.setUp = setUp

setUp()

const configMongoose = (app) => {
    app.set('mongoose', mongoose)
}

module.exports = {
    mongoose, configMongoose
}
