import React from 'react';
import "./style.scss";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { config } from '../../../helpers/config';


const MobileApp = () => {
  return (
    <Container className='mobile-app'>
        <div >
            <Row className='g-4'>
                <Col md={7}>
                <h1>Herhangi bir sorunda bize ulaşabilirsiniz.</h1>
                </Col>
                <Col md={5}>
                <a href={`tel:${config.contact.phone1}`} className='btn'><FiPhoneCall />Bizi Arayın</a>
          <a href={`mailto:${config.contact.mail1}`} className='btn'><FiMail /> Email ile Ulaşın</a>
                </Col>
            </Row>
            </div>
    </Container>
  )
}

export default MobileApp