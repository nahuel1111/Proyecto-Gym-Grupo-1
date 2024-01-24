import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Navbarx.css'

const Navbarx = () => {
  return (
<Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">React Gym</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="cambio">
            <Nav.Link href="#home" className='mt-2'>Inicio</Nav.Link>
            <Nav.Link href="#link"  className='mt-2'>Sobre nosotros</Nav.Link>
            <Nav.Link href="#link"  className='mt-2'>Contacto</Nav.Link>
            <Nav.Link href="#link"  className='mt-2'>Productos</Nav.Link>
            <li href="#link" className='boton-cambio'>Cerrar Sesion</li> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> )
}

export default Navbarx