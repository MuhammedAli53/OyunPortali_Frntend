import React from "react";
import { Card } from "react-bootstrap";
import "./games-card.scss"; 

const GamesCard = ({ image, title}) => {
  return (
    <Card className="games-card">
      <Card.Body>
       <div className="image">
          <Card.Img
            variant="top"
            src={`images/games/${image}`}
            alt={title}
            className="img-fluid"
          />
        </div>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Subtitle className="card-subtitle">
          
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default GamesCard;
