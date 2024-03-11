import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signUpWithGoogle } from '../firebase/config/fireBaseAuth';

function SignUpForm() {
  
  return (
    <Container className="border p-4 mt-5 shadow-lg" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">Sign Up</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control type="password" placeholder="Re-type Password" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={6}>
            <Form.Control type="text" placeholder="First Name" />
          </Col>
          <Col xs={6}>
            <Form.Control type="text" placeholder="Last Name" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={6}>
            <Form.Check type="radio" id="male" label="Male" />
          </Col>
          <Col xs={6}>
            <Form.Check type="radio" id="female" label="Female" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Select>
              <option>Select a country</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Check type="checkbox" label="I agree with terms and conditions" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Check type="checkbox" label="I want to receive the newsletter" />
          </Col>
        </Row>
        <div className="d-flex justify-content-between align-items-center">
        <Button variant="primary" type="submit">
            Register
        </Button>
        <Button variant="primary" type="button" onClick={signUpWithGoogle}>
        {/* <FontAwesomeIcon icon={faGoogle} size="1x"/> */}
        login with google
        </Button>
        
    </div>
      </Form>
    </Container>
  );
}

export default SignUpForm;
