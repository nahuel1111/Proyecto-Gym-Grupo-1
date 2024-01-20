import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Footerx = () => {
  return (
    <footer className='bg-navbar-propio p-5 mt-5'>
    <Container>
      <Row className='align-items-center'>
        <Col>
          <NavLink to="#home">FaceBook</NavLink>
          <NavLink to="#link">InstaGram</NavLink>
          <NavLink to="#link">YouTube</NavLink>
        </Col>
        <Col>
          <NavLink to="#home">Trabaja con nosotros</NavLink>
          <NavLink to="#link">Terminos y condiciones</NavLink>
          <NavLink to="#link">Contacto</NavLink>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footerx