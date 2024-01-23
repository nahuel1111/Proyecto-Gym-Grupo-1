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
      <Row>

        <Col  sm={2} md={10} lg={6} className='mt-5'> <Imgs url={'https://i.postimg.cc/GhQs9VmH/header.png'} alt={'Mario bros'} width={'60%'} />  </Col>
        <Col sm={10} md={2} lg={6} className='mt-5'>
        <div className='texto-primera'>
          <h2>BODY SHAPE</h2>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto eveniet quae amet dolore incidunt nisi veritatis recusandae dolor fugit error facere officia, accusantium, laborum nobis laudantium vel excepturi a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit repellat dignissimos, debitis sint consequatur maiores iure tempore incidunt id cumque accusamus fuga, optio modi nam quas quaerat, voluptatem aliquam.</p>
        
        </div>

        </Col>
      </Row>

      <Row>

<Col  sm={2} md={10} lg={7} className='mt-5'><div className='texto-primera'>
  <h2 className='text-center'>BODY SHAPE</h2>
 <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae dignissimos ullam dolore accusantium qui facilis quia cumque animi non corporis ab velit commodi, necessitatibus voluptatem cum. Rerum, distinctio fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta nesciunt cupiditate dignissimos qui cumque tempore corrupti neque possimus voluptates dolor praesentium tempora rerum iusto sapiente laboriosam minus, eaque dicta.</p>
</div> </Col>
<Col sm={10} md={2} lg={5} className='mt-5'>
<Imgs url={'https://i.postimg.cc/5yLXSkJQ/about.png'} alt={'Mario bros'} width={'80%'} /> 

</Col>
</Row>
<div className='titulo'>
  <h2>Fortaleza y superacion tu camino hacia el exito</h2>
  <div className='parrafo-titulo'><p>Encuentra tu fuerza interior,supera tus limites y alcanza tus metas,todo en un mismo lugar</p></div>
 <div className='parrafo-clases'>
  <h3>Nuestros planes para que logres tu maximo potencial</h3>
 </div>
</div>


    </Container>
    </main>
    </>
  )
}

export default HomePage