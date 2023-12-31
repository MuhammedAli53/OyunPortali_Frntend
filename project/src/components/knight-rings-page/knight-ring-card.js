import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  ProgressBar,
} from "react-bootstrap";
import "./knight-ring.scss"

const KnightRingCard = ({ classes, Np, experience, price, race,stats }) => {
  return (
    <Card className="knight-ring bg-primary">
      <CardHeader className="ring-header">
        <Card.Img
          variant="top"
          src={`images/games/rings/ko-cypher-ring.webp`}
          className="ring-image m-2 border-color"
        />
        <Card.Text className="ring-classes"> {classes} </Card.Text>

        <ProgressBar
          animated
          now={experience}
          label={experience}
          variant="danger"
        />
    
      </CardHeader>
      <Card.Body className="ring-body">
       <CardText>{race}</CardText>
             <CardText>Np: {Np}</CardText>
             <ul className="stats">
                <li>STR <span> &nbsp; {stats.str}</span></li>
                <li>DEX <span> &nbsp; {stats.dex}</span></li>
                <li>HP <span> &nbsp; {stats.hp}</span></li>
                <li>INT <span> &nbsp; {stats.int}</span></li>
                <li>MP <span> &nbsp; {stats.mp}</span></li>
            </ul>
    
      </Card.Body>
      <CardFooter className="ring-footer">
        <CardText className="mt-3">{price}₺</CardText>
        <Button className="btn">Incele</Button>
      </CardFooter>
    </Card>
  );
};
export default KnightRingCard;
