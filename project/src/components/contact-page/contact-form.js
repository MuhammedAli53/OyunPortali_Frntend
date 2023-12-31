import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
const ContactForm = () => {
  return (
    <Form>
      <h2>Her Türlü Sorun ve Şikayetlerinizi Bizlere İletebilirsiniz.</h2>
      <Row>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
            <Form.Control
              placeholder="Adınız"
              aria-label="Adınız"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <Form.Control
            
              placeholder="Soyadınız"
              aria-label="Soyadınız"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email adresiniz</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mesajınızı giriniz</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
};

export default ContactForm;
