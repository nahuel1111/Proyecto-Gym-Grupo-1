import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Footerx.css';
const Footerx = () => {
  return (
    <footer className='borde-footer'>
    <Container>
      <Row className='align-items-center'>
        <Col>
        <h5 className='titulo-footer'>Compañia</h5>
          <ul className='cambios mt-4'>
            <li >
              Sobre Nosotross
            </li>
            <li > Contactanos</li>
            <li > Politicas de privacidad</li>
            <li > Terminos y Condiciones</li>
            <li > Centro de Soporte</li>
          </ul>

        </Col>
        <Col>
        <h5 className='titulo-footer'>Compañia</h5>
          <ul className='cambios mt-4'>
            <li >
              Sobre Nosotross
            </li>
            <li  > Contactanos</li>
            <li > Politicas de privacidad</li>
            <li > Terminos y Condiciones</li>
            <li > Centro de Soporte</li>
          </ul>


        </Col>

        <Col>
        <h5 className='titulo-footer'>Compañia</h5>
          <ul className='cambios mt-4'>
            <li >
              Sobre Nosotross
            </li>
            <li > Contactanos</li>
            <li > Politicas de privacidad</li>
            <li > Terminos y Condiciones</li>
            <li > Centro de Soporte</li>
          </ul>

        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footerx