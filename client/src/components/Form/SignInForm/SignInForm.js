import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [identifier, setIdentifier] = useState(''); // email or username
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signin', {
        identifier,
        password,
      });
      console.log(response.data);

      // Clear form fields
      setIdentifier('');
      setPassword('');

      // Navigate to home page after successful sign in
      navigate('/home');

    } catch (error) {
      console.error('Error signing in:', error.response ? error.response.data : error);
      setError(error.response ? error.response.data.msg : 'Error signing in');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicIdentifier">
        <Form.Label>Email or Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email or username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
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
        />
      </Form.Group>

      <Button className='mt-4' variant="primary" type="submit">
        Sign In
      </Button>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </Form>
  );
};

export default SignInForm;
