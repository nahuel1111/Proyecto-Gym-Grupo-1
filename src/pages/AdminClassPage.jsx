import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import '../css/AdminPage.css'
const AdminClassPage = () => {
  return (
    <>
    <Container>
    <h2>Clases</h2>
    <div className='d-flex justify-content-center mt-3'>
        <Table striped bordered hover className='w-75'>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Precio Name</th>
              <th>Codigo</th>
              <th>Imagen</th>
              <th>Editar/Eliminar</th>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
        </Table>
      </div>
    </Container>
   
    </>
  )
}

export default AdminClassPage