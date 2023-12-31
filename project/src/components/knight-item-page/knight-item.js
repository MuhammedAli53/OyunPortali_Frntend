import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import knightItem from "../../helpers/data/knight-item.json";
import ItemCard from './item-card';
import "./knight-item.scss";

const KnightItem = () => {

  return (
    <div className='knight-index'>
      <Container>
        
      <h4 >Knight Online Item</h4>
     
      
        <Row className='row-cols-2 row-cols-sm-3 row-cols-xl-6 g-2'>
          {
            knightItem.map((item)=> <Col key={item.id}>
              <ItemCard {...item}/>
              </Col>)
          }
        </Row>
      
</Container>
    </div>
  )
}

export default KnightItem