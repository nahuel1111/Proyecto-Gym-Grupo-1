import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Navbarx.css'
import Imgs from '../components/Imgs';
import { Link, useNavigate } from 'react-router-dom'

const Navbarx = () => {
  const token = JSON.parse(sessionStorage.getItem('token'))
  const role = JSON.parse(sessionStorage.getItem('role'))
 const navigate =useNavigate()
  const cerrarSesion = (ev)=> {
    event.preventDefault()
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('idUsuario')
    navigate('/')
  }
  
  return (
<Navbar data-bs-theme="dark" className='navbar' expand="lg" >
      <Container className='container-navbar'>
        <div className='Logo'>
          <a href="#home"><Imgs url={'https://i.postimg.cc/V6HyGBwj/Logo-Gym-removebg-preview.png'} alt={'Logo'} width={'50px'} /></a>
        </div>
        <Navbar.Brand href="#home" className='Nombre-gym'>Monkey "D" Gym</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse >
          { role === 'admin' ?
<Nav className="cambio">
<Nav.Link href="#home" className='mt-2'>Inicio</Nav.Link>
  <Nav.Link href="/AdminProduct"  className='mt-2'>Productos</Nav.Link>
  <Nav.Link  href="/AdminUser"  className='mt-2'>Usuarios</Nav.Link>
  <Nav.Link href="/AdminProductClass"   className='mt-2'>Clases</Nav.Link>
  <Nav.Link href="/AdminTeacher"  className='mt-2'>Profesores</Nav.Link>
  </Nav>
 :
 <Nav className="cambio">
        <Nav.Link href="/homePage" className='mt-2'>Inicio</Nav.Link>
  <Nav.Link href="AboutUs"  className='mt-2'>Sobre nosotros</Nav.Link>
  <Nav.Link href="ContactPage"  className='mt-2'>Contacto</Nav.Link>
  <Nav.Link href=""  className='mt-2'>Productos</Nav.Link>
         
  </Nav>
          }
  
 <div className='boton-cambio'>
  { token && role ?
    <Link href="#link" onClick={cerrarSesion}>Cerrar Sesion</Link> :
    <span>Bienvenido</span>
  }
 
 


</div>     
              
        </Navbar.Collapse>
      </Container>
    </Navbar> )
}

export default Navbarx