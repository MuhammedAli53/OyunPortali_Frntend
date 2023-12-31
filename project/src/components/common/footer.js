import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { config } from "../../helpers/config";
import "./footer.scss";
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer g-5">
          <Col lg={3} className="text-center text-lg-start">
            <Link to="/">{/* imageye bastığımda anasayfaya gel.  */}
            <Image
              src="/images/logo/logo1-white.png"
              className="img-fluid "
              alt={config.project.name}
            />
            </Link>
            <p className="description mt-3">{config.project.description}</p>
          </Col>
          <Col md={4} lg={3} className="text-center">
            <h3>Linkler</h3>
            <Nav className="links flex-column">{/* bu yapıları as link to yapısı ile alıyoruz. Nedeni ise Router Dom yapısı bu şekilde anlıyor. */}
              <Nav.Link as={Link} to="/">Ana sayfa</Nav.Link>{/* as derken sen link gibi davran diyoruz. to ise router-dom yapısı için geçerli. */}
              <Nav.Link as={Link} to="/games">Oyunlar</Nav.Link>
              <Nav.Link as={Link} to="/knight">Knight Online</Nav.Link>
              <Nav.Link as={Link} to="/about">Kurumsal</Nav.Link>
              <Nav.Link as={Link} to="/contact">Iletişim</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} lg={3} className="text-center">
            <h3>Sosyal Medya</h3>
            <Nav className="flex-column">
              <Nav.Link href={config.contact.socialMedia.facebook}>Facebook</Nav.Link>
              <Nav.Link href={config.contact.socialMedia.instagram}>Instagram</Nav.Link>
              <Nav.Link href={config.contact.socialMedia.twitter}>Twitter</Nav.Link>
              <Nav.Link href={config.contact.socialMedia.youtube}>Youtube</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} lg={3} className="text-center">
            {" "}
            <h3>Iletişim</h3>
            <Nav className="flex-column">
              <Nav.Link href={`tel:${config.contact.phone1}`}>
                Bize telefonla ulaşın
              </Nav.Link>
              <Nav.Link href={`whatsapp://send?phone=${config.contact.phone1}`}>
                Whatsapp kanalımıza erişin
              </Nav.Link>
              <Nav.Link href={`mailto:${config.contact.mail1}`}>
                Mail gönderin
              </Nav.Link>

              <Nav.Link href={config.contact.mapURL} target="blank">
                {config.contact.address}
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
