import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import '../css/AdminPage.css'
import { useEffect, useState } from 'react'; 
import clienteAxios, { jsonConfig } from '../helpers/axiosconfig';
import Swal from 'sweetalert2';
import Imgs from '../components/Imgs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'

const AdminUserPage = () => {
  const [users, setUsers] = useState([]) 
  const [show, setShow] = useState(false)
 
 
  const [userState, setUserState] = useState({})
  const [showUpdate, setShowUpdate] = useState(false)
  const [update, setUpdate]= useState(false)


  const handleCloseUpdate = () => setShowUpdate(false)
const handleShowUpdate = (userData) => {
  setShowUpdate(true)
  setUserState(userData)
}
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleChange =  (ev)=>{
  setUserState({ ...userState, [ev.target.name]: ev.target.value })
  
}


const addUser = async (ev) => {
  ev.preventDefault()
  try {
    await clienteAxios.post("/users", userState)
   
      handleClose()
       if(update==false){
            setUpdate(true)
          }else{
            setUpdate(false)
          }
      Swal.fire({
        title: "Producto Agregado",
        text: "El producto se agrego correctamente.",
        icon: "success"
      })
  
  } catch (error) {
    console.error("Error al agregar el usuario:", error)
  }

  try {
     
  } catch (error) {
    console.error("Error al agregar el usuario:", error)
  }
}
const updateUser = async (ev)=>{
ev.preventDefault()

const UpdateUser= await clienteAxios.put(`/users/${userState._id}`,userState,jsonConfig)

if (UpdateUser.status === 200){
  handleCloseUpdate()
  if(update==false){
    setUpdate(true)
  }else{
    setUpdate(false)
  }
  Swal.fire({
    title: "Usuario actualizado con exito!",
    icon: "success"
  });
}
}

const deleteUser = async (iduser)=>{
  try {
    Swal.fire({
      title: "Estas seguro de que quieres eliminar a este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, estoy seguro!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteuser = await clienteAxios.delete(`/users/${iduser}`, jsonConfig)
        
      
        if(deleteuser.status === 200){
          Swal.fire({
            title: "Eliminado!",
            text: "El usuario se elimino correctamente.",
            icon: "success"
          })
          if(update==false){
            setUpdate(true)
          }else{
            setUpdate(false)
          }
        }
      }
    });
   } catch (error) {
    console.log(error)
   }
}
const GetAllUsers= async ()=>{
  const AllgetUsers = await clienteAxios.get("/users") 
  setUsers(AllgetUsers.data.AllUsers)
}


  useEffect(() => {
    GetAllUsers()
  },[update])
  return (
    <>
    <Container>
    
    <h2>Usuarios</h2>
    <Button variant="primary" onClick={handleShow}>
        Crear Producto
              </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
  <Form.Label>Nombre del Producto</Form.Label>
  <Form.Control type="text" placeholder="Ingrese el nombre del producto"  name='nombreUsuario' onChange={handleChange} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPrice">
  <Form.Label>Precio</Form.Label>
  <Form.Control type="text" placeholder="Ingrese el precio"  name='emailUsuario' onChange={handleChange} />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPrice">
  <Form.Label>Descripcion</Form.Label>
  <Form.Control type="text" placeholder="Ingrese el precio"  name='contrasenia' onChange={handleChange} />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPrice">
  <Form.Label>Role</Form.Label>
  <Form.Control type="text" placeholder="Ingrese el precio"  name='role' onChange={handleChange} />
</Form.Group>
    </Form>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addUser}>
            Guardar datos
          </Button>
        </Modal.Footer>
      </Modal>
    <div className='d-flex justify-content-center mt-3'>
        <Table striped bordered hover className='w-75'>
          <thead>
            <tr>
              <th>Nombre y Apellido</th>
              <th>Email</th>
              <th>Role</th>
              <th>Editar/Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
               users.map((user) =>
               <tr key={user._id}>
                 <td>{user.nombreUsuario}</td>
                 <td>{user.emailUsuario}</td>
                 <td>{user.role}</td>
                 <td>
                 <Button variant="primary" onClick={() => handleShowUpdate(user)}> Editar</Button>
                 <Button variant="primary" onClick={() => deleteUser(user._id)}> Eliminar</Button>
                 <Button variant="success">
  <Link to={`/AdminComment/${user._id}`}>Comentarios</Link>
</Button>
                 </td> 
                
<Modal show={showUpdate} onHide={handleCloseUpdate}>
  <Modal.Header closeButton>
    <Modal.Title>Editar Producto</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre del producto"
          value={userState.nombreUsuario}
          name="nombreUsuario"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el precio"
          value={userState.emailUsuario}
          name="emailUsuario"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la descripción"
          value={userState.role}
          name="role"
          onChange={handleChange}
        />
      </Form.Group>

    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseUpdate}>
      Cerrar
    </Button>
    <Button variant="primary" onClick={updateUser} >
      Guardar Cambios
    </Button>
  </Modal.Footer>
</Modal>
               </tr>
             )
            }
          </tbody>
        </Table>
      </div>

    </Container>
    
    </>
  )
}

export default AdminUserPage