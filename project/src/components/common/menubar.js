import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas, Image } from 'react-bootstrap';
import { config } from '../../helpers/config';
import { FiHome, FiAperture, FiCalendar, FiAward, FiHeadphones, FiPhoneCall, FiMail   } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Menubar = () => {
  const [mode, setMode] = useState("white");/* burda bir state açtık. modu beyaz olarak ayarladık ancak beyazı ben scss ile ezdim. ancak sadece rengini değiştirdik. Mode olarak bakarsak hala white. dark moda geçince mode değişecek. */

  const handleScroll = () => { 
    const scrollYPosition = window.scrollY; // suanki scroll konumumuzu verir.
    if(scrollYPosition>50){/* scroll y pozisyonda yatay olarak hareketlenir. Sayfa aşağıya doğru indirildiğinde y pozisyondaki scroll değeri artar. */
      setMode("dark");/* bu sayı 50den büyükse  */
    }else{
      setMode("white");
    }
   }

    useEffect(()=>{
       window.addEventListener("scroll", handleScroll);
       return ()=>{
        window.removeEventListener("scroll", handleScroll);
       }
    },[])
  
  return (
    <Navbar key="" expand="xxl" className={`menubar bg-${mode}`} sticky='top' data-bs-theme={mode}>
    <Container >
      <Navbar.Brand as={Link} to="/">
        <Image src={`/images/logo/${mode=="white" ? "logo1" : "logo1-white"}.png`} className='img-fluid' alt={config.project.name}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-lg`}
        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
          <Image src="/images/logo/logo1.png" className='img-fluid' alt={config.project.name}/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="nav-menu justify-content-center flex-grow-1 p">
            <Nav.Link as={Link} to="/"><FiHome/> Ana Sayfa</Nav.Link>
            <NavDropdown 
             
              to="/games"
              title="Oyunlar"
              id={`offcanvasNavbarDropdown-expand-lg`}
              
            >
              <NavDropdown.Item as={Link} to="/games/knight" >Knight Online</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/games/rise">
                Rise Online
              </NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/games/pubg">
                Pubg Mobile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/games/valorant">
                Valorant
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/games/lol">
                League of Legends
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/games/sro">
                Silkroad Online
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown
              title="Knight Online"
              id={`offcanvasNavbarDropdown-expand-lg`}
            >
              <NavDropdown.Item as={Link} to={"knight-items"}>Item</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"knight-rings"}>
                Karakter
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#gbs">
                Goldbar
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about"><FiAward /> Kurumsal</Nav.Link>
            <Nav.Link as={Link} to="/contact"><FiHeadphones /> İletişim</Nav.Link>
            
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Ara"
              className="me-2"
              aria-label="Search"
            />
            <Button lg variant="outline-success">Ara</Button>
          </Form>
          {/*  */}
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}

export default Menubar;