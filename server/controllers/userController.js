const User = require('../models/userModel');

// Sign Up Controller
const signUp = async (req,res)=>{
  // Log the request body for debugging purposes
console.log(req.body)
   try{
    // Destructure user details from request body
const { firstName,lastName,username,email,password } = req.body

// Check if the user already exists in the database
let user =await User.findOne({$or : [{username},{email}]})

 // If user already exists, return an error response
    if(user){
      return res.status(400).json({msg : 'user already exists'})
    }
  // Create a new user instance
 user = new User({
  firstName,
  lastName,
  username,
  email,
  password
 })

  // Save the new user to the database
  await user.save
   // If user creation is successful, return success response
   res.status(201).json({msg:'user created successfully',user})
  }catch(error){
console.error(error.message)

res.status(500).json({msg:'Server error'})
  }
 
}

// Sign In Controller
const signIn = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    // Check if the user exists
    let user = await User.findOne({ $or: [{ email: identifier }, { username: identifier }] });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    // Check password (Assuming password is not hashed in the database)
    const isMatch = password === user.password;

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    // Here you can create a JWT token and send it to the client for authentication
    res.json({ msg: 'Sign in successful', user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  signUp,
  signIn,
  };
