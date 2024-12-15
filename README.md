Sneaker Heads & Company

🚀 Project Overview

Sneaker Heads & Company is a full-stack e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). This project allows users to:
	•	Sign up and sign in.
	•	Browse a catalog of sneakers.
	•	Add products to their cart.
	•	Proceed to checkout.

The application focuses on providing a seamless user experience with responsive design, secure authentication, and dynamic interactions.

🌟 Features

Frontend

	•	React.js:
	•	Reusable components (SignInForm, SignUpForm, Navbar, Products, CartItem).
	•	React Router for seamless navigation.
	•	Context API for shopping cart state management.
	•	Styling:
	•	Responsive UI built with Bootstrap and custom CSS.
	•	Dynamic Interactions:
	•	Add-to-Cart functionality.
	•	Real-time cart updates with subtotal calculations.

Backend

	•	Express.js:
	•	RESTful APIs for authentication (Sign Up, Sign In).
	•	MongoDB:
	•	User schema design with Mongoose.
	•	Authentication:
	•	Validates unique usernames and emails.
	•	Ensures secure password storage and validation.


	•	Authentication:
	•	Validation for user inputs during sign-up and sign-in.
	•	Username and email uniqueness enforced via MongoDB.

    📚 Concepts Covered

	•	Frontend:
	•	React components, Context API for state management, and React Router.
	•	Responsive UI using Bootstrap and CSS.
	•	Backend:
	•	RESTful APIs with Express.js.
	•	MongoDB schema design using Mongoose.
	•	Full-Stack Integration:
	•	Axios for communication between frontend and backend.
	•	Authentication:
	•	Input validation for secure account creation.

    🚀 Process in Creating the Project

	1.	Planning:
	•	Defined features: authentication, catalog browsing, shopping cart.
	•	Designed a modular architecture for frontend and backend.
	2.	Frontend Development:
	•	Built reusable components for UI.
	•	Integrated routing and dynamic state management.
	3.	Backend Development:
	•	Designed user schema and implemented authentication routes.
	•	Configured MongoDB for data persistence.
	4.	Integration:
	•	Connected frontend and backend using Axios.
	•	Tested APIs using Postman.
	5.	Final Touches:
	•	Debugged and ensured responsiveness across devices.

 🚀 How to Run the Project

Prerequisites

	•	Node.js (v16 or higher)
	•	MongoDB installed and running locally
	•	Package manager: npm

Starting the Backend Server

	1.	Navigate to the Server directory:
     - cd server

	2.	Install dependencies:
     - npm install

    3.	Start the server:
     - npm start

    4.	The backend will run on http://localhost:4545.

Starting the Frontend Server
	1.	Navigate to the client directory:
     - cd client

    2.	Install dependencies:
      - npm install

    3.	Start the React development server:
      -npm start
	4.	The frontend will run on http://localhost:3000.

🛠️ Folder Structure

Frontend
src/
│
├── components/        # Reusable React components (Navbar, Jumbotron, etc.)
├── context/           # Context API for state management
├── pages/             # Page components (SignIn, SignUp, Home, Catalog, Cart)
├── images/            # Static assets (logos, product images)
└── App.js             # Main application entry point

Backend
backend/
│
├── models/            # Mongoose models (user schema)
├── routes/            # Express routes (user authentication)
├── config/            # MongoDB connection configuration
└── server.js          # Main server entry point

🌐 API Endpoints

User Authentication

Method	Endpoint	Description
POST	/api/signup	Create a new user
POST	/api/signin	Authenticate a user

POST /api/signup
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe",
  "email": "john.doe@example.com",
  "password": "SecurePass123!"
}

{
  "msg": "User created successfully",
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "username": "johndoe",
    "email": "john.doe@example.com"
  }
}

🚀 Future Enhancements

	•	Implement JWT-based authentication for secure sessions.
	•	Add a payment gateway for checkout.
	•	Create an admin panel to manage products and users.
	•	Enhance UI/UX with animations and additional features.

📝 License

This project is licensed under the MIT License.
