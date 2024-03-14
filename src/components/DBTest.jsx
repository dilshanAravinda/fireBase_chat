import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { initChat, msgModel, sendMsg } from "../db/msg";

const DbTest = () => {
  const [formData, setFormData] = useState({
    complaintId: "",
    serviceProviderId: "",
    clientId: "",
    message: "",
  });

  const [isInitChat, setIsInitChat] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isInitChat) {
      await initChat(
        formData.clientId,
        formData.serviceProviderId,
        formData.complaintId
      );
      setIsInitChat(true);
    }

    await sendMsg(
      formData.clientId,
      formData.serviceProviderId,
      formData.complaintId,
      msgModel(
        "text",
        formData.message,
        formData.clientId,
        formData.serviceProviderId
      )
    );

    const { message } = formData;
    console.log("Submitted message:", message);
    // Reset the message field after submission
    setFormData({
      ...formData,
      message: "",
    });
  };

  const handleClearFields = () => {
    setFormData({
      complaintId: "",
      serviceProviderId: "",
      clientId: "",
      message: "",
    });
    setIsInitChat(false);
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="complaintId">
                <Form.Label>Complaint Id</Form.Label>
                <Form.Control
                  type="text"
                  name="complaintId"
                  value={formData.complaintId}
                  onChange={handleChange}
                  placeholder="Enter complaint Id"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="serviceProviderId">
                <Form.Label>Service Provider Id</Form.Label>
                <Form.Control
                  type="text"
                  name="serviceProviderId"
                  value={formData.serviceProviderId}
                  onChange={handleChange}
                  placeholder="Enter service provider Id"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="clientId">
                <Form.Label>Client Id</Form.Label>
                <Form.Control
                  type="text"
                  name="clientId"
                  value={formData.clientId}
                  onChange={handleChange}
                  placeholder="Enter client Id"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button
                variant="secondary"
                onClick={handleClearFields}
                className="ms-2"
              >
                Clear Fields
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <div>
        <p>{formData.clientId}</p>
        <p>{formData.complaintId}</p>
        <p>{formData.message}</p>
        <p>{formData.serviceProviderId}</p>
        {isInitChat ? <p>true</p> : <p>false</p>}
      </div>
    </>
  );
};

export default DbTest;
