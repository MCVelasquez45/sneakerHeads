// Import mongoose library
const mongoose =require('mongoose')


// Destructure Schema from mongoose
const { Schema } = mongoose


// Define the Mongoose User Schema

const userSchema = new Schema({


  // First name of the user, stored as String

firstName : String,

  // Last name of the user, stored as String
 
lastName :String,
  // Username of the user, required, unique, and at least 8 characters long

username:{
  type:String,
  required: true,
  unique:true,

},

  // Email of the user, required and unique
 
email:{
  type:String,
  required:true,
  unique:true
},



  // Password of the user, required and at least 8 characters long
password:{
  type:String,
  required:true,
  minlength:8
}


})

// Export the Mongoose model named 'User' based on the userSchema
module.exports = mongoose.model('User',userSchema)

 
