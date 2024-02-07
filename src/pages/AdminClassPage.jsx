
import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import '../css/AdminPage.css'
import { useEffect, useState } from 'react'; 
import clienteAxios, { config } from '../helpers/axiosconfig';
import Swal from 'sweetalert2';
import Imgs from '../components/Imgs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'
const AdminClassPage = () => {

  const [classlistState, setClassListState] = useState({})
  const [classList, setClassList] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false)

  const handleCloseUpdate = () => setShowUpdate(false)
  const handleShowUpdate = (classData) => {
    setShowUpdate(true)
    setClassListState(classData)
  }
  
  
  


    const handleChange =  (ev)=>{
      setClassListState({ ...classlistState, [ev.target.name]: ev.target.value })
      
    }

    const handleImageChange = (ev) => {
      const file = ev.target.files[0]
      setClassListState({ ...classlistState, imagen: file })
    }

  const UpdateClass = async (ev)=>{
    try {
      ev.preventDefault()
      
      const formData = new FormData()
        formData.append('Titulo', classlistState.Titulo)
        formData.append('Precio', classlistState.Precio)
        formData.append('Descripcion', classlistState.Descripcion)
        formData.append('Horario', classlistState.Horario)
        formData.append('imagen', classlistState.imagen)
      const updateClass= await clienteAxios.put(`/Class/${classlistState._id}`,formData,config)
      if (updateClass.status === 200){
        handleCloseUpdate()
        Swal.fire({
          title: "Producto actualizado con exito!",
          icon: "success"
        });
      }
     
      
    } catch (error) {
      console.log(error)
    }
  }
const GetAllClass = async ()=>{
  const AllClass = await clienteAxios.get("/Class") 
  setClassList(AllClass.data.GetAllClass)
}





  useEffect(() => {
    GetAllClass()
  },[])
  return (
    <>
    <main className='text-light'>
    <Container>
    <h2>Clases</h2>
    <div className='d-flex justify-content-center mt-3'>
        <Table responsive striped bordered hover className='w-75'>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Horario</th>
              <th>imagen</th>
              <th>Editar</th>
              <th> Usuarios</th>
            </tr>
          </thead>
          <tbody>
          {classList.map((clase) => (
    <tr key={clase._id}>
      <td>{clase.Titulo}</td>
      <td>{clase.Descripcion}</td>
      <td>{clase.Precio}</td>
      <td>{clase.Horario}</td>
      <td><Imgs url={clase.imagen} alt={'clase'} width={'20%'}  /></td>
      <td>   <Button variant="primary" onClick={() => handleShowUpdate(clase)}> Editar</Button>
<Modal show={showUpdate} onHide={handleCloseUpdate}>
  <Modal.Header closeButton>
    <Modal.Title>Editar Producto</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Nombre de la clase</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre de la clase"
          value={classlistState.Titulo}
          name="Titulo"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese el precio"
          value={classlistState.Precio}
          name="Precio"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la descripción"
          value={classlistState.Descripcion}
          name="Descripcion"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Horario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el horario"
          value={classlistState.Horario}
          name="Horario"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>imagen</Form.Label>
        <Form.Control
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />
 {typeof classlistState.imagen == 'string' ? (
  <Imgs url={classlistState.imagen} alt={'clase'} width={'50%'} />
) : (
  <p>Imagen no disponible o cambiada</p>
)}
        
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseUpdate}>
      Cerrar
    </Button>
    <Button variant="primary" onClick={UpdateClass}>
      Guardar Cambios
    </Button>
  </Modal.Footer>
</Modal></td>

<td> 
{clase.Usuarios.length > 0 ? clase.Usuarios.length : 0}
 </td>


    </tr>
  ))}
          </tbody>
        </Table>
      </div>
    </Container>
    </main>
    </>
  )
}

export default AdminClassPage