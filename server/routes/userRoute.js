// Import the userController module
const UserControllers = require('../controllers/userController');

// Import the express library
const express = require('express');

// Create a new router instance using express
const userTraffic = express.Router();

// Define routes for user signup and signin
// These routes will use the corresponding functions from the userController module
userTraffic.post('/signup', UserControllers.signUp);

userTraffic.post('/signin', UserControllers.signIn);

// Export the userTraffic router
module.exports = userTraffic;