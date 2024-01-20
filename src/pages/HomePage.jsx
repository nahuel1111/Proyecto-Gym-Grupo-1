import React from 'react'
import '../css/homepages.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
  return (
    <>
    <main className='body mt-5'>
    <Container>
      <Row>
        <Col>
        <div>
          <h2>MAKE YOUR</h2>
          <h1>BODY SHAPE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur ea ipsam debitis corrupti tempora. Ipsa, fugit? Commodi explicabo porro quod consequuntur. Minima veniam possimus quis nobis tempore eveniet iure?</p>
          <a href="">Empieza Ya</a>
        </div>

        </Col>
        <Col></Col>
      </Row>
    </Container>
    </main>
    </>
  )
}

export default HomePage