import React, { useDebugValue } from 'react'
import '../css/PlansPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imgs from '../components/Imgs';
import { useParams } from 'react-router-dom';
import clienteAxios, { jsonConfig } from '../helpers/axiosconfig';
import { useEffect, useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

const PlansPage = () => { 
  const [listaclase, setListaclase] = useState({})
  const [teacher, setTeacher] = useState({}) 
  const [fechaActual, setFechaActual] = useState(null);
  const [fechafinalback,setFechafinalback] = useState(null);
  const [update,setUpdate]= useState(false)
  const use = useParams()

  const userid = JSON.parse(sessionStorage.getItem('idUsuario'))

  const GetOneClass = async ()=>{
    
  const classone = await clienteAxios.get(`/Class/${use.id}`) 
  setListaclase(classone.data.GetClass)
  const teacherOne= await clienteAxios.get(`/teachers/${classone.data.GetClass.IDProfesor}`)
  setTeacher(teacherOne.data.GetTeacher)
  const fechacierre = await clienteAxios.get(`/users/${userid}`)
  setFechafinalback(fechacierre.data.OneUser.fechafinal)
}

  const ReservarClase = async (ev) => {
    try {
      ev.preventDefault();
      const fecha = new Date();
      setFechaActual(fecha);
      const fechaFinal = new Date(fecha);
      fechaFinal.setDate(fechaFinal.getDate() + 30);
      const Reserva = await clienteAxios.put(
        `/Class/Add/${use.id}`,
        {
          Usuarios: userid,
          fechainicio: fecha,
          fechafinal:fechaFinal
        },
        jsonConfig
      );
      Swal.fire({
        title: "Clase Reservada",
        icon: "success"
      });
      setUpdate(true)
    } catch (error) {
      console.log(error);
    }
  }
const sacarusuario= async (ev)=>{
  ev.preventDefault()
await clienteAxios.put(`/Class/delete/${use.id}`,  {
  Usuarios: userid,
  fechainicio: undefined
},
jsonConfig)
setUpdate(false)
}
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if(fechafinalback){
        if (now >= fechafinalback) {   
          sacarusuario();
        }
      }
    }, 60000)
  
  }, []);
  

  useEffect(() => {
    GetOneClass()
  },[update])
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
  {  
    fechafinalback ? (
      <h2>
        Clase Agregada , puede pasarse por la sucursal al horario mencionado 
      </h2>
    ) : (
      <h2>Reserva Tu Plan:  
        <Button variant="secondary" onClick={ReservarClase}>
          Reservar Clase
        </Button>
      </h2>
    )
  }
</div>
        <Row>
          <Col>
            <div>
              <h5 className='text-light mt-4'>Horario De La Clase: {listaclase.Horario}</h5>
            </div>
       
            <Col className='Nombre-Profesor mt-4'>
              <h2> nombre del profesor es  {teacher.NombyAp}</h2>
              <Col>
              <div>
              <Imgs url={teacher.imagen} alt={'Profesor'} id={'Profe-Plan-Musculacion'} />
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