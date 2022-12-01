const mongoose = require("mongoose")
const DogSchema = mongoose.Schema({
dogName: {
    type: String, 
    required: true
},
dogAge: {
    type: Number,
    min:1,max:20, 
    required: true
},
dogBreed: {
    type: String, 
    required: true
},
})
module.exports = mongoose.model("Dog",DogSchema)