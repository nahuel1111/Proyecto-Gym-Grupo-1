import React from 'react'
import '../css/PlansPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imgs from '../components/Imgs';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import clienteAxios from '../helpers/axiosconfig';
import { useEffect, useState } from 'react'; 
import { list } from 'postcss';

const PlansPage = () => { 
  const [listaclase, setListaclase] = useState({}) 
  const use = useParams()



  const GetOneClass = async ()=>{
    
  const classone = await clienteAxios.get(`/Class/${use.id}`) 
  setListaclase(classone.data.GetClass)
  }





  useEffect(() => {
    GetOneClass()
  },[])
  console.log(use)
  return (
    <main>
      <Container>
        <hr className='text-light mt-2' />   
        <div>   <div class="Div-Musculacion">
        
        <h3 class="">{listaclase.Titulo}</h3>
        <p class="opacity-50">"Desafía tus límites con nuestro plan de entrenamiento pesado y alcanza un nivel superior de fuerza y resistencia."</p>
      </div>
      <hr className='text-light' />
      <Row>
        <div className='Imagen-Principal-Musculatura'>
          <Imgs url={listaclase.imagen} alt={'Foto de Mancuernas'} width={"90%"} id={'Plan-Musculacion-1'} />
        </div>
        <Col>
          <div>
            <li className='Descripcion-Plan'>{listaclase.Descripcion}</li>
          </div>
        </Col>
        <Col>
          <div className='Imagen-Secundaria-Musculatura'>
            <Imgs url={'https://i.postimg.cc/RZ6gNW8C/joven-ropa-deportiva-clase-ejercicios-gimnasio.jpg'} alt={'Imagen-Profesor'} width={'80%'} id={'Plan Musculacion 2'} />
          </div>
        </Col>
        <hr className='text-light' />
        <hr className='text-light' />
      </Row></div>
        <div className='Div-Reserva-Turno'>
          <h2>° Reserva Tu Turno:</h2>
        </div>
        <Row>
          <Col>
            <div>
              <h5 className='text-light mt-4'>Horario De La Clase:</h5>
            </div>
            <div>
              <Form.Select className='Form-Hora mt-3' aria-label="Default select example">
                <option>Seleccione el Horario en el que Desea Tener la Clase:</option>
                <option value="1"> 8:00</option>
                <option value="2">10:00</option>
                <option value="3">12:00</option>
              </Form.Select>
            </div>
            <Col className='Nombre-Profesor mt-4'>
              <h2>Profesor: Diego Fernandez </h2>
              <Col>
              <div>
              <Imgs url={'https://i.postimg.cc/0NHgkH24/imagen-2024-01-26-184853180.png'} alt={'Profesor de Plan de Musculacion'} id={'Profe-Plan-Musculacion'} />
              </div>
              </Col>
            </Col>
          </Col>
        </Row>
  
       
 
    
   
      </Container>
    </main>
  )
}

export default PlansPage