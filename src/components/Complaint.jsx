import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ComplaintForm = () => {
  const [issue, setIssue] = useState('');
  const [serviceProvider, setServiceProvider] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation if needed

    // Navigate to the chat page with the complaint data
    navigate(`/chat?issue=${encodeURIComponent(issue)}&serviceProvider=${encodeURIComponent(serviceProvider)}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Put Your Complaint</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="issue">
          <Form.Label>Issue:</Form.Label>
          <Form.Control
            type="text"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="serviceProvider">
          <Form.Label>Service Provider:</Form.Label>
          <Form.Control
            type="text"
            value={serviceProvider}
            onChange={(e) => setServiceProvider(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ComplaintForm;

