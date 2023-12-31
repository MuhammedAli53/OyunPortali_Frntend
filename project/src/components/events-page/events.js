import React from 'react'
import events from "../../helpers/data/knight-item.json";
import { Col, Container, Row } from 'react-bootstrap';
import EventCard from './game-card';

const Events = () => {
  return (
    <Container>
    <Row className='row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
            {events.map((event) => <Col key={event.id}> <EventCard {... event}/></Col>)}

    </Row>
</Container>
  )
}

export default Events