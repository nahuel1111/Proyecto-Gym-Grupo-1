import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import '../css/AdminPage.css'
import { useEffect, useState } from 'react'; 
import clienteAxios, { config } from '../helpers/axiosconfig';
import Swal from 'sweetalert2';

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]) 
const GetProducts = async()  => {

  const AllProducts = await clienteAxios.get("/products") 
  setProducts(AllProducts.data.getAllProducts)
}
const deleteProduct = async(idProduct) =>{
  try {
    Swal.fire({
      title: "Estas seguro de que quieres eliminar a este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, estoy seguro!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteProduct = await clienteAxios.delete(`/products/${idProduct}`, config)
      
        if(deleteProduct.status === 200){
          Swal.fire({
            title: "Eliminado!",
            text: "El producto se elimino correctamente.",
            icon: "success"
          });
        }
      }
    });
   } catch (error) {
    console.log(error)
   }
}

useEffect(() => {
  GetProducts()
}, [])
  return (
    <>
    <Container>
    <h2>Productos</h2>
    <div className='d-flex justify-content-center mt-3'>
        <Table striped bordered hover className='w-75'>
          <thead>
            <tr>
              <th>id</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Editar/Eliminar</th>
            </tr>
          </thead>
          <tbody>
          {
            products.map((product) =>
             <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.titulo}</td>
              <td>{product.precio}</td>
              <td>{product.descripcion}</td>
              <td>{product.imagen}</td>
              <td><a >Editar</a></td>
              <button className='btn btn-danger' onClick={() => deleteProduct(product._id)}>Eliminar</button>
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

export default AdminProductsPage