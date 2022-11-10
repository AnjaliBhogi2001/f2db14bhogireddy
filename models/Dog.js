const mongoose = require("mongoose")
const DogSchema = mongoose.Schema({
dogName: String,
dogAge: Number,
dogBreed: String
})
module.exports = mongoose.model("Dog",DogSchema)