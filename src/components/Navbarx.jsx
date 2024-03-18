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

<Link to="/AdminPage" className='mt-2 nav-link'>Inicio</Link>
  <Link to="/AdminProduct"  className='mt-2 nav-link'>Productos</Link>
  <Link  to="/AdminUser"  className='mt-2 nav-link'>Usuarios</Link>
  <Link to="/AdminProductClass"   className='mt-2 nav-link'>Clases</Link>
  <Link to="/AdminTeacher"  className='mt-2 nav-link'>Profesores</Link>
  </Nav>
 :
 <Nav className="cambio">
        <Link to="/homePage" className='mt-2 nav-link'>Inicio</Link>
  <Link to="AboutUs"  className='mt-2 nav-link'>Sobre nosotros</Link>
  <Link to="ContactPage"  className='mt-2 nav-link'>Contacto</Link>
  <Link to="/Products"  className='mt-2 nav-link'>Productos</Link>
         
  </Nav>
          }
  
 <div className='boton-cambio'>
  { token && role ?
    <Link to="#link" className='nav-link' onClick={cerrarSesion}>Cerrar Sesion</Link> :
    <span>Bienvenido</span>
  }
 
 


</div>     
              
        </Navbar.Collapse>
      </Container>
    </Navbar> )
}

export default Navbarx