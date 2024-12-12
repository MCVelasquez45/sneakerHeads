// Import the express library
const express = require('express');

// Import the cors middleware for enabling CORS (Cross-Origin Resource Sharing)
const cors = require('cors');

// Define the port number
const PORT = 4545;

// Import the configuration file (if there's any)
require('./config/config');

// Import the userRoute module
const userRoute = require('./routes/userRoute');

// Create an instance of the express application
const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Mount the userRoute module at the '/api' endpoint
app.use('/api', userRoute);

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`App up and running on http://localhost:${PORT}`);
});