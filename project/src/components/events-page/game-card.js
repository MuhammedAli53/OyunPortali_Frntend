import React from 'react';
import "./game-card.scss";
import { Card } from 'react-bootstrap';

const EventCard = (image, name, price, rate) => {
  return (
    <Card className="event-card">
    <Card.Body>
      <div className="image">
        <Card.Img
          variant="top"
          src={`images/games/item-logo/${image}`}
          className="img-fluid"
        />
      </div>
      <Card.Title className="card-title"></Card.Title>
      <Card.Subtitle className="card-subtitle">
       
        <div>
         {rate}
        </div>
        <div>
          {price}
        </div>
        
      </Card.Subtitle>
    </Card.Body>
  </Card>
  )
}

export default EventCard