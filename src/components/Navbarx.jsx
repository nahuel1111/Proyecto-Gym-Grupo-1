import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Navbarx.css'
import Imgs from '../components/Imgs';

const Navbarx = () => {
  return (
<Navbar data-bs-theme="dark" className='navbar' expand="lg" >
      <Container className='container-navbar'>
        <div className='Logo'>
          <a href="#home"><Imgs url={'https://i.postimg.cc/V6HyGBwj/Logo-Gym-removebg-preview.png'} alt={'Logo'} width={'50px'} /></a>
        </div>
        <Navbar.Brand href="#home" className='Nombre-gym'>Monkey "D" Gym</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse >
          <Nav className="cambio">
            <Nav.Link href="#home" className='mt-2'>Inicio</Nav.Link>
            <Nav.Link href="#link"  className='mt-2'>Sobre nosotros</Nav.Link>
            <Nav.Link href="#link"  className='mt-2'>Contacto</Nav.Link>
            <Nav.Link href="#link"  className='mt-2'>Productos</Nav.Link>
            </Nav>
            <div className='boton-cambio'>
            <a href="#link">Cerrar Sesion</a>
              </div>          
        </Navbar.Collapse>
      </Container>
    </Navbar> )
}

export default Navbarx