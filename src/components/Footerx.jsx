import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Footerx.css';
import Imgs from '../components/Imgs';

const Footerx = () => {
  return (
    <footer className='borde-footer'>
      <Container>
        <Row className='align-items-center'>

          <Col>
            <a href="#home"><Imgs url={'https://i.postimg.cc/V6HyGBwj/Logo-Gym-removebg-preview.png'} alt={'Logo'} width={'250px'} /></a>
          </Col>

          <Col>
            <h5 className='titulo-footer text-light'>"Redes"</h5>
            <ul className='cambios mt-3 text-light'>
              <li><a href="">Instagram</a></li>
              <li><a href="">Facebook</a></li>
              <li><a href="">Tik Tok</a></li>
            </ul>
          </Col>

          <Col>
            <h5 className='titulo-footer text-light'>"Clases"</h5>
            <ul className='cambios mt-3 text-light'>
              <li><a href="">Musculacion</a></li>
              <li><a href="">Clases</a></li>
              <li><a href="">Plan Full</a></li>
            </ul>
          </Col>

          <Col>
            <h5 className='titulo-footer text-light'>"Ayuda"</h5>
            <ul className='cambios mt-3 text-light'>
              <li><a href="">Contactanos</a></li>
              <li><a href="">Politicas de privacidad</a></li>
              <li><a href="">Centro de Soporte</a></li>
            </ul>
          </Col>
          <div>
            <p class="Copyright text-center">&copy; 2024 Monkey "D" Gym. Todos los derechos reservados.</p>
          </div>

        </Row>
      </Container>
    </footer>
  )
}

export default Footerx