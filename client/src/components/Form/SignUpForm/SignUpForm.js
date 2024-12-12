import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signup', {
        firstName,
        lastName,
        username,
        email,
        password,
      });
      console.log(response.data);
      // Handle success, redirect to home page
      setFirstName('');
      setLastName('');
      setUsername('');
      setEmail('');
      setPassword('');

      alert('Sign-up successful!');
      
      // Redirect to home page
      navigate('/home');  // Assuming '/home' is the path to the home page

    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error, show an error message
    }
  };

  return (
    <Form className='mb-4' onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          pattern="^(?=.*\d)(?=.*[!@#$%^&*(),.?':{}|<>])(?=.*[a-zA-Z])\w{8,}$"
          title="A valid password must contain at least one number, one special character, and be at least 8 characters long."
        />
      </Form.Group>

      <Button className='mt-4' variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;

