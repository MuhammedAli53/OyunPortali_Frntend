import React from 'react'
import knightRing from "../../helpers/data/knight-ring.json"
import KnightRingCard from './knight-ring-card'
import { Col, Container, Row } from 'react-bootstrap'

const KnightRingPage = () => {
  return (
    <div>
    <Container>
        
      <h4 >Knight Online Rings</h4>
     
      
        <Row className='row-cols-2 row-cols-sm-3 row-cols-xl-6 g-2'>
          {
            knightRing.map((ring)=> <Col key={ring.id}>
              <KnightRingCard {...ring}/>
              </Col>)
          }
        </Row>
      
</Container>
</div>
  )
}

export default KnightRingPage