import React from "react";
import {
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import Map from "./map";
import ContactForm from "./contact-form";
const ContactPageBody = () => {
  return (
    <div>
    <Container>
      <Row>
        <Col>
          <Image src="images/contact/pracownik.png" />
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>

   {/*  <Map /> */}
    </div>
  );
};

export default ContactPageBody;
