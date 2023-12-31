import React from 'react';
import { Button, Card, CardFooter, CardHeader, CardText } from 'react-bootstrap';
import "./item-card.scss";

const ItemCard = ({ image, name, rate, reverse, classes, features,price}) => {
    
 

    return (
        
      <Card className='item-card bg-primary'>
        <CardHeader className='item-header'>
            <Card.Img 
              variant="top"
              src={`images/games/item-logo/${image}`}
              alt={name}
              className="item-image m-2 border-color"
            />
            <Card.Title className="item-title">{name} + {rate} {reverse ? `(Reverse)` : `` }</Card.Title>
            <Card.Text className='item-classes'> {classes} </Card.Text>
        </CardHeader>
        <Card.Body className='item-body d-block '>
            <Card.Img src={`images/games/item-features/${features}`}></Card.Img>
    
          <Card.Subtitle className="card-subtitle">
            
          </Card.Subtitle>
        </Card.Body>
        <CardFooter className='item-footer'>
            <CardText className='mt-3'>{price}₺</CardText>
            <Button className='btn'>Incele</Button>
        </CardFooter>
      </Card>
     
    );
  };


export default ItemCard