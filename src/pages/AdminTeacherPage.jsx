import React from 'react'
import '../css/AdminPage.css'
import { useEffect, useState } from 'react';
import clienteAxios, { config, jsonConfig } from '../helpers/axiosconfig';
import Swal from 'sweetalert2';
import Imgs from '../components/Imgs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
const AdminTeacherPage = () => {
  const [teacher, setTeacher] = useState([])

  const [show, setShow] = useState(false)


  const [teacherState, setTeacherState] = useState({})
  const [showUpdate, setShowUpdate] = useState(false)
  const [update, setUpdate] = useState(false)



  const handleCloseUpdate = () => setShowUpdate(false)
  const handleShowUpdate = (teacherData) => {
    setShowUpdate(true)
    setTeacherState(teacherData)
  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const GetTeachers = async () => {
    const AllTeachers = await clienteAxios.get("/teachers")
    setTeacher(AllTeachers.data.GetAllTeachers)
  }

  const handleChange = (ev) => {
    setTeacherState({ ...teacherState, [ev.target.name]: ev.target.value })

  }
  const handleImageChange = (ev) => {
    const file = ev.target.files[0]
    setTeacherState({ ...teacherState, imagen: file })
  }
  const addTeacher = async (ev) => {
    ev.preventDefault();

    try {

      const formData = new FormData()
      formData.append('NombyAp', teacherState.NombyAp)
      formData.append('Telefono', teacherState.Telefono)
      formData.append('imagen', teacherState.imagen)

      await clienteAxios.post("/teachers", formData)

      handleClose()
      Swal.fire({
        title: "Profesor Agregado",
        text: "El Profesor se agrego correctamente.",
        icon: "success"
      })
      if (update == false) {
        setUpdate(true)
      } else {
        setUpdate(false)
      }


    } catch (error) {
      console.error("Error al agregar el producto:", error)
    }
  }
  const deleteTeacher = async (idteacher) => {
    try {
      Swal.fire({
        title: "Estas seguro de que quieres eliminar a este profesor?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI, estoy seguro!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const deleteProduct = await clienteAxios.delete(`/teachers/${idteacher}`, config)


          if (deleteProduct.status === 200) {
            Swal.fire({
              title: "Eliminado!",
              text: "El profesor se elimino correctamente.",
              icon: "success"
            })
            if (update == false) {
              setUpdate(true)
            } else {
              setUpdate(false)
            }
          }
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  const updateTeacher = async (ev) => {
    try {
      ev.preventDefault()

      const formData = new FormData()
      formData.append('NombyAp', teacherState.NombyAp)
      formData.append('Telefono', teacherState.Telefono)
      formData.append('imagen', teacherState.imagen)

      const updateteacher = await clienteAxios.put(`/teachers/${teacherState._id}`, formData, config)
      if (updateteacher.status === 200) {
        handleCloseUpdate()
        if (update == false) {
          setUpdate(true)
        } else {
          setUpdate(false)
        }
        Swal.fire({
          title: "profesor actualizado con exito!",
          icon: "success"
        });
      }


    } catch (error) {
      console.log(error)
    }
  }
  const addClass = async (ev, teacherId) => {
    try {
      ev.preventDefault()
      const exist = await clienteAxios.get(`/Class/65c00d09f01768099fcc74ef`)
      if (exist.data.GetClass.IDProfesor == teacherId) {
        return await clienteAxios.put(`/Class/deleteTeacher/65c00d09f01768099fcc74ef`, { IDProfesor: teacherId }, jsonConfig)
      } else if (exist.data.GetClass.IDProfesor) {
        alert("ya hay un profesor en esta clase")
      } else {
        const updateteacher = await clienteAxios.put(`/Class/AddTeacher/65c00d09f01768099fcc74ef`, { IDProfesor: teacherId }, jsonConfig)
      }


    } catch (error) {
      console.log(error)
    }


  }
  useEffect(() => {
    GetTeachers()
  }, [update])
  return (
    <>
      <main>
        <Container>
          <h2 className='text-light'>Profesores</h2>

          <Button variant="primary" onClick={handleShow}>
            Crear Profesor
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Profesor</Modal.Title>
            </Modal.Header>
            <Modal.Body> <Form>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Nombre del Profesor</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el nombre del profesor" name='NombyAp' onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el numero del profesor" name='Telefono' onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} accept="image/*" />
              </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={addTeacher}>
                Guardar datos
              </Button>
            </Modal.Footer>
          </Modal>
          <div className='d-flex justify-content-center mt-3'>
            <Table responsive striped bordered hover className='w-75'>
              <thead>
                <tr>

                  <th>Nombre profesor</th>
                  <th>Telefono</th>
                  <th>Imagen</th>
                  <th>Editar/Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {
                  teacher.map((teachers) =>

                    <tr key={teachers._id}>

                      <td>{teachers.NombyAp}</td>
                      <td>{teachers.Telefono}</td>
                      <td><Imgs url={teachers.imagen} alt={'profesor'} width={'50%'} /></td>
                      <td>
                        <Button variant="primary" onClick={() => handleShowUpdate(teachers)}> Editar</Button>
                        <td className='eliminar-profesores'>
                          <button className='btn btn-danger' onClick={() => deleteTeacher(teachers._id)}>Eliminar</button>
                          <td>
                            <button className='btn btn-danger' onClick={(event) => addClass(event, teachers._id)}>Clase 1</button>
                            <td>
                              <button className='btn btn-danger' onClick={() => addClasstwo(teachers._id)}>Clase 2</button>
                            </td>
                              <button className='btn btn-danger' onClick={() => addClassthree(teachers._id)}>Clase 3</button>
                          </td>
                        </td>
                        <Modal show={showUpdate} onHide={handleCloseUpdate}>
                          <Modal.Header closeButton>
                            <Modal.Title>Editar profesor</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Form.Label>Nombre del profesor</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Ingrese el nombre del producto"
                                  value={teacherState.NombyAp}
                                  name="NombyAp"
                                  onChange={handleChange}
                                />
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Label>telefono</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Ingrese el precio"
                                  value={teacherState.Telefono}
                                  name="Telefono"
                                  onChange={handleChange}
                                />
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                  type="file"
                                  onChange={handleImageChange}
                                  accept="image/*"
                                />
                                {typeof teacherState.imagen === 'string' ? (
                                  <Imgs url={teacherState.imagen} alt={'profesor'} width={'50%'} />
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
                            <Button variant="primary" onClick={updateTeacher}>
                              Guardar Cambios
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </td>

                    </tr>
                  )
                }
              </tbody>
            </Table>
          </div>
        </Container>
      </main>

    </>
  )
}

export default AdminTeacherPage