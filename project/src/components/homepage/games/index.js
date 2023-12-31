import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import games from "../../../helpers/data/games.json";
import GamesCard from '../../games-page/games-card';
import "./games.scss";

const Games = () => {

  const gamesApp = games.filter((game) => game.featured) /* featured true olanları filktere. */
  return (
    <div className='games-index'>
      <Container>
      <h4 >Oyunlar</h4>
      
        <Row className='row-cols-2 row-cols-sm-3 row-cols-xl-6 g-1'>
          {
            gamesApp.map((game)=> <Col key={game.id}>
              <GamesCard {...game}/>
              </Col>)
          }
        </Row>
      
</Container>
    </div>
  )
}

export default Games