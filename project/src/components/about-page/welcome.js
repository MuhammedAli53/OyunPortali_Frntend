import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./welcome.scss";
const Welcome = () => {
  return (
    <div className='welcome'>
        <Container>
            <Row className='g-5'>
                <Col md={4}>
                <Image src='/images/logo/logo1.png' className='img-fluid'/>
                </Col>
                <Col md={8}>
                    <h2 className='mb-3'>Oyun Portalı'nı neden tercih etmelisiniz?</h2>
                    <p className='mb-3'>Aşağıda, bizi tercih etmenizi gerektirecek bazı maddeleri listeledik </p>
                    <ul>
                        <li>7/24 Hızlı Teslimat Hizmeti Sunmamız,</li>
                        <li>Avantajlı Fiyatlarla Oyuncu Dostu Olmamız,</li>
                        <li>Güvenli Alım-Satım İşlemleriniz İçin Sağladığımız Garantörlüğümüz,</li>
                        <li>Ve Son Olarak Güncel Kampanyalar. </li>
                    </ul>
                    <p>Şimdiden bizi tercih ettiğiniz için şimdiden teşekkür ederiz</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Welcome