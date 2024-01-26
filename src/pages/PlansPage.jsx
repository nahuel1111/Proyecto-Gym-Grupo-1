import React from 'react'
import '../css/PlansPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imgs from '../components/Imgs';

const PlansPage = () => {
  return (
    <main>
      <Container>
        <hr className='text-light mt-2'/>
        <div class="Div-Musculacion">
          <h3 class="">"Plan Musculacion"</h3>
          <p class="opacity-50">"Desafía tus límites con nuestro plan de entrenamiento pesado y alcanza un nivel superior de fuerza y resistencia."</p>
        </div>
        <hr  className='text-light'/>
        <Row>
          <div className='Imagen-Principal-Musculatura'>
          <Imgs url={'https://i.postimg.cc/s2ymgTRy/foto-blanco-negro-hombre-musculoso-usando-tiza-deportiva-antes-levantar-pesa-entrenamiento-pesas-gim.jpg'} alt={'Foto de Mancuernas'} id={'Plan-Musculacion-1'} />
          </div>
          <Col>
            <div>
              <li className='Descripcion-Plan'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro placeat at maiores beatae maxime recusandae, vel impedit aut nequ</li>
            </div>
          </Col>
          <Col>
            <div className='Imagen-Secundaria-Musculatura'>
              <Imgs url={'https://i.postimg.cc/RZ6gNW8C/joven-ropa-deportiva-clase-ejercicios-gimnasio.jpg'} alt={'Imagen-Profesor'} width={'80%'} id={'Plan Musculacion 2'} />
            </div>
          </Col>
          <hr className='text-light' />
          <hr className='text-light' />
        </Row>
      </Container>
    </main>
  )
}

export default PlansPage