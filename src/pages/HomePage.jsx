import React from 'react'
import '../css/homepages.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imgs from '../components/Imgs';
import CardsC from '../components/CardsC';
import Form from 'react-bootstrap/Form';
import 'remixicon/fonts/remixicon.css';
import { useEffect, useState } from 'react'; 
import clienteAxios from '../helpers/axiosconfig';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
  const [classlist, setClasslist] = useState([]) 
  const GetClass = async ()=>{
    const AllClass = await clienteAxios.get("/Class") 
    setClasslist(AllClass.data.GetAllClass)
  }
  useEffect(() => {
    GetClass()
  },[])
  return (
    <>
    <main className='body pt-5'>
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

<div className='mt-5'>
<Row>
{classlist.map((clase, index) => (
  <Col md={4} className='mt-5' key={index}>
    {(index + 1) % 3 === 0 ? (
      <ComponenteDiferente1 />
    ) : (index + 1) % 2 === 0 ? (
      <ComponenteDiferente2 />
    ) : (
      <CardsC
        url={"https://i.postimg.cc/zDhMzjHv/pricing1.png"}
        titulo={clase.Titulo}
        precio={clase.Precio}
        clase={"background"}
        primera={<i className="ri-checkbox-circle-line color"><span>hola</span></i>}
        segunda={<i className="ri-checkbox-circle-line color"><span>hola</span></i>}
        tercera={<i className="ri-checkbox-circle-line color"><span>hola</span></i>}
        cuarta={<i className="ri-checkbox-circle-line color"><span>hola</span></i>}
        quinta={<i className="ri-checkbox-circle-line color"><span>hola</span></i>}
        boton= {           
        <Link to={`/PlansPage/${clase._id}`}></Link>
     }
      />
      
    )}
  
    
  </Col>
))}
  </Row>
</div>
<div className='mt-5 '>
  <h2 className='text-light border-bajo'>hola como estas</h2>
  <div className='caja-padre-form'>
  <div className='mt-5 form-cambio'>
<Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Ingresa tu comentario</Form.Label>
      <textarea class="" maxlength="150" minlength="10" placeholder="Ej: Esto es compatible con..." name="" id="" cols="72" rows="6"></textarea>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>
  </div>


</div>


    </Container>
    </main>
    </>
  )
}

export default HomePage