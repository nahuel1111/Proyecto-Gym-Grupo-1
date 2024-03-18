import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Footerx.css';
import Imgs from '../components/Imgs';
import { Link, useNavigate } from 'react-router-dom'

const Footerx = () => {
  return (
    <footer className='borde-footer'>
      <Container>
        <Row className='align-items-center'>

          <Col>
            <a href="/HomePage"><Imgs url={'https://i.postimg.cc/V6HyGBwj/Logo-Gym-removebg-preview.png'} alt={'Logo'} width={'250px'} /></a>
          </Col>

          <Col>
            <h5 className='titulo-footer text-light'>"Redes"</h5>
            <ul className='cambios mt-3 text-light'>
              
              <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
              <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
              <li><a href="https://www.tiktok.com" target="_blank">Tik Tok</a></li>
            </ul>
          </Col>

          <Col>
            <h5 className='titulo-footer text-light'>"Clases"</h5>
            <ul className='cambios mt-3 text-light'>
              <li><a href="/Error404">Musculacion</a></li>
              <li><a href="/Error404">Clases</a></li>
              <li><a href="/Error404">Plan Full</a></li>
            </ul>
          </Col>

          <Col>
            <h5 className='titulo-footer text-light'>"Ayuda"</h5>
            <ul className='cambios mt-3 text-light'>
              <li><a href="/AboutUs">Contactanos</a></li>
              <li><a href="/Error404">Politicas de privacidad</a></li>
              <li><a href="/ContactPage">Centro de Soporte</a></li>
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