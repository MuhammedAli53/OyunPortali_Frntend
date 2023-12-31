import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import games from "../../helpers/data/games.json";
import GamesCard from './games-card';

const Games = () => {
  return (
    <Container>
        <Row className='row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5'>
                {games.map((game) => <Col key={game.id}> <GamesCard {... game}/></Col>)}

        </Row>
    </Container>
  )
}

export default Games