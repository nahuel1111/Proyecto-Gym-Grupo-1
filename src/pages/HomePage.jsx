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
import clienteAxios, { jsonConfig } from '../helpers/axiosconfig';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Swal from 'sweetalert2';

const HomePage = () => {
  const [classlist, setClasslist] = useState([])
  const [comentario, setComentario] = useState('');

  const userid = JSON.parse(sessionStorage.getItem('idUsuario'))
  const GetClass = async () => {
    const AllClass = await clienteAxios.get("/Class")
    setClasslist(AllClass.data.GetAllClass)
  }
  const handleChange = (event) => {
    setComentario(event.target.value)
  };
  const EnviarComentario = async (ev) =>{
    ev.preventDefault()
    const comentarios = await clienteAxios.post(`/Comment/${userid}`,{comentario:comentario})
    Swal.fire({
      title: "Comentario Agregado",
      text: "El Comentario se agrego correctamente.",
      icon: "success"
    })
  }
  useEffect(() => {
    GetClass()
  }, [])
  return (
    <>
      <main className='body pt-5'>
        <Container>
          <Row>
            <Col>
              <div className='texto-cambio'>
                <h2>HAZ QUE TU</h2>
                <h1>CUERPO TENGA FORMA</h1>
                <p>"En nuestro gimnasio, no solo te ayudamos a esculpir tu cuerpo,
                  sino que también te brindamos el apoyo y la motivación necesarios para alcanzar tus metas de fitness y transformar tu vida por completo."</p>
                <a href="">¿Empezamos?</a>
              </div>

            </Col>

            <Col> <Imgs className='imagen-1' url={'https://i.postimg.cc/FHTQ9DrQ/home-img.png'} alt={'Mario bros'} width={'85%'} />  </Col>
          </Row>
          <Row>

            <Col className='mt-5'> <Imgs className='imagen-2' url={'https://i.postimg.cc/GhQs9VmH/header.png'} alt={'Mario bros'} width={'60%'} />  </Col>
            <Col className='mt-5'>
              <div className='texto-primera'>
                <h2 className='texto-primera-1'>"DESAFÍA TU CUERPO:</h2>
                <h2 className='texto-primera-2'>CLASE DE MUSCULACIÓN"</h2>
                <p> "¡Descubre la potencia de la musculación en nuestra clase! Dirigida por entrenadores expertos,
                  te llevará a través de un entrenamiento intenso que desarrolla fuerza y definición muscular. Desde principiantes hasta avanzados,
                  todos son bienvenidos a unirse y alcanzar sus metas fitness. ¡Únete hoy y transforma tu cuerpo!"</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className='mt-5'>
              <div className='texto-primera'>
                <h2 className='texto-primera-1'>"DESAFÍA TU CUERPO:</h2>
                <h2 className='texto-primera-2'>CLASE DE CROSSFIT"</h2>
                <p> "Experimenta la intensidad del CrossFit en nuestra clase. Con entrenamiento funcional y de alta intensidad,
                  te ayudaremos a mejorar tu fuerza, resistencia y flexibilidad. Únete a nuestra comunidad diversa y motivada para alcanzar
                  tus objetivos fitness. ¡Desafía tu cuerpo y supera tus límites con nosotros!"</p>
              </div>
            </Col>
            <Col className='mt-5'>
              <Imgs className='imagen-3' url={'https://i.postimg.cc/5yLXSkJQ/about.png'} alt={'Mario bros'} width={'80%'} />
            </Col>
          </Row>
          <div className='caja-lineas'>
            <div className="linea-grande"></div>
          </div>
          <div className='titulo'>
            <h2>"Fortaleza y superacion tu camino hacia el exito"</h2>
            <div className='parrafo-titulo'>
              <p>"Encuentra tu fuerza interior,supera tus limites y alcanza tus metas,todo en un mismo lugar"</p>
            </div>
            <div className='caja-lineas'>
              <div className="linea-grande"></div>
            </div>
          </div>

          <div className='mt-5'>
            <div className='parrafo-clases'>
              <h3>°NUESTROS PLANES PARA QUE LOGRES TU MÁXIMO POTENCIAL:</h3>
            </div>
            <Row>
              {classlist.map((clase, index) => (
                <Col md={4} className='mt-5' key={index}>
                  {(index + 1) % 3 === 0 ? (
                   <CardsC
                   url={"https://i.postimg.cc/zDhMzjHv/pricing1.png"}
                   titulo={clase.Titulo}
                   precio={clase.Precio}
                   clase={"background"}
                   primera={<i className="ri-checkbox-circle-line color"><span>Fuerza</span></i>}
                   segunda={<i className="ri-checkbox-circle-line color"><span>Definicion</span></i>}
                   tercera={<i className="ri-checkbox-circle-line color"><span>Entrenamiento</span></i>}
                   cuarta={<i className="ri-checkbox-circle-line color"><span>Fortalecimiento</span></i>}
                   quinta={<i className="ri-checkbox-circle-line color"><span>Resistencia</span></i>}
                   boton={
                     <Link to={`/PlansPage/${clase._id}`}>Ver Clase:</Link>
                   }
                 />
                  ) : (index + 1) % 2 === 0 ? (
                    <CardsC
                    url={"https://i.postimg.cc/zDhMzjHv/pricing1.png"}
                    titulo={clase.Titulo}
                    precio={clase.Precio}
                    clase={"background"}
                    primera={<i className="ri-checkbox-circle-line color"><span>Intesidad</span></i>}
                    segunda={<i className="ri-checkbox-circle-line color"><span>Variedad</span></i>}
                    tercera={<i className="ri-checkbox-circle-line color"><span>Agilidad</span></i>}
                    cuarta={<i className="ri-checkbox-circle-line color"><span>Superacion</span></i>}
                    quinta={<i className="ri-checkbox-circle-line color"><span>Cardio</span></i>}
                    boton={
                      <Link to={`/PlansPage/${clase._id}`}>Ver Clase:</Link>
                    }
                  />
                  ) : (
                    <CardsC
                      url={"https://i.postimg.cc/zDhMzjHv/pricing1.png"}
                      titulo={clase.Titulo}
                      precio={clase.Precio}
                      clase={"background"}
                      primera={<i className="ri-checkbox-circle-line color"><span>Completo</span></i>}
                      segunda={<i className="ri-checkbox-circle-line color"><span>Integrado</span></i>}
                      tercera={<i className="ri-checkbox-circle-line color"><span>Optimizado</span></i>}
                      cuarta={<i className="ri-checkbox-circle-line color"><span>Versátil</span></i>}
                      quinta={<i className="ri-checkbox-circle-line color"><span>Desafiante</span></i>}
                      boton={
                        <Link to={`/PlansPage/${clase._id}`}>Ver Clase:</Link>
                      }
                      />
                  )}
                </Col>
              ))}
            </Row>
          </div>

          <div className='mt-5 '>
            <h2 className='text-light border-bajo'>Dejanos Tu Comentario:</h2>
            <div className='caja-padre-form'>
              <div className='mt-5 form-cambio'>
                <Form >
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='texto-comentario'>INGRESA TU COMENTARIO.</Form.Label>
                    <InputGroup>
                      <Form.Control as="textarea" aria-label="With textarea" placeholder='Su comentario nos ayuda a mejorar!' onChange={handleChange} value={comentario} />
                    </InputGroup>
                  </Form.Group>
                  <Button className='boton-comentario' variant="primary" onClick={EnviarComentario}>
                    Enviar Comentario
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