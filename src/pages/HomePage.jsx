import React from 'react'
import '../css/homepages.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imgs from '../components/Imgs';

const HomePage = () => {
  return (
    <>
    <main className='body mt-5'>
    <Container>
      <Row>
        <Col  sm={10} md={2} lg={6}>
        <div className='texto-cambio'>
          <h2>MAKE YOUR</h2>
          <h1>BODY SHAPE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Lorem, ipsum dolor sit amet cons</p>
          <a href="">Empieza Ya</a>
        </div>

        </Col>
       
        <Col  sm={2} md={10} lg={6}> <Imgs url={'https://i.postimg.cc/FHTQ9DrQ/home-img.png'} alt={'Mario bros'} width={'85%'} />  </Col>
      </Row>
    </Container>
    </main>
    </>
  )
}

export default HomePage