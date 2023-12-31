import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { config } from '../../helpers/config';
import "./topbar.scss";
import { FaSquareXTwitter } from "react-icons/fa6";


const Topbar = () => {
  return (
    <div className='topbar'>
     
      
          <Container>
            <Row>
                <Col md={8}  className='d-none d-lg-block' >🎮   {config.project.slogan} </Col>
                <Col md={4} className=' text-start text-lg-end'>
                  <Button className='btn'>Giriş yap</Button>
                  <Button className='btn'>Kayıt ol</Button>
                </Col>
                
            </Row>
            </Container>
           
       
    </div>
  )
}

export default Topbar