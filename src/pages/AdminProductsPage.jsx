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


const AdminProductsPage = () => {
  const [products, setProducts] = useState([]) 
  const [show, setShow] = useState(false)
 
 
  const [productState, setProductState] = useState({})
  const [showUpdate, setShowUpdate] = useState(false)
  const [update, setUpdate]= useState(false)

const handleCloseUpdate = () => setShowUpdate(false)
const handleShowUpdate = (productData) => {
  setShowUpdate(true)
  setProductState(productData)
}


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const GetProducts = async()  => {

  const AllProducts = await clienteAxios.get("/products") 
  setProducts(AllProducts.data.getAllProducts)
}


const handleChange =  (ev)=>{
  setProductState({ ...productState, [ev.target.name]: ev.target.value })
  
}
const handleImageChange = (ev) => {
  const file = ev.target.files[0]
  setProductState({ ...productState, imagen: file })
}

const addProduct = async (ev) => {
  ev.preventDefault();

  try {
    if (!productState.titulo || !productState.precio || !productState.imagen) {
      console.error("Por favor, completa los campos obligatorios.");
      return;
    }

    const formData = new FormData()
    formData.append('titulo', productState.titulo)
    formData.append('precio', productState.precio)
    formData.append('descripcion', productState.descripcion)
    formData.append('imagen', productState.imagen)

    await clienteAxios.post("/products", formData)
   
      handleClose()
      Swal.fire({
        title: "Producto Agregado",
        text: "El producto se agrego correctamente.",
        icon: "success"
      })
      if(update==false){
        setUpdate(true)
      }else{
        setUpdate(false)
      }
     
    
  } catch (error) {
    console.error("Error al agregar el producto:", error)
  }
}
const updateProduct = async(ev)=>{
try {
  ev.preventDefault()
  
  const formData = new FormData()
    formData.append('titulo', productState.titulo)
    formData.append('precio', productState.precio)
    formData.append('descripcion', productState.descripcion)
    formData.append('imagen', productState.imagen)
  const updateProduct= await clienteAxios.put(`/products/${productState._id}`,formData,config)
  if (updateProduct.status === 200){
    handleCloseUpdate()
    if(update==false){
      setUpdate(true)
    }else{
      setUpdate(false)
    }
    Swal.fire({
      title: "Producto actualizado con exito!",
      icon: "success"
    });
  }
 
  
} catch (error) {
  console.log(error)
}
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

useEffect(() => {
  GetProducts()
},[update])
  return (
    <>
    <main>
    <Container>
    <h2 className='text-light'>Productos</h2> 

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
  <Form.Control type="text" placeholder="Ingrese el nombre del producto"  name='titulo' onChange={handleChange} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPrice">
  <Form.Label>Precio</Form.Label>
  <Form.Control type="text" placeholder="Ingrese el precio"  name='precio' onChange={handleChange} />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPrice">
  <Form.Label>Descripcion</Form.Label>
  <Form.Control type="text" placeholder="Ingrese el precio"  name='descripcion' onChange={handleChange} />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicImage">
  <Form.Label>Imagen</Form.Label>
  <Form.Control type="file" onChange={handleImageChange} accept="image/*" />
</Form.Group>

    </Form>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addProduct}>
            Guardar datos
          </Button>
        </Modal.Footer>
      </Modal>
    <div className='d-flex justify-content-center mt-3'>
        <Table responsive striped bordered hover className='w-75'>
          <thead>
            <tr>
              
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
     
              <td>{product.titulo}</td>
              <td>{product.precio}</td>
              <td>{product.descripcion}</td>
              <td><Imgs url={product.imagen} alt={'producto'} width={'50%'}  /></td>
              <td>
              <Button variant="primary" onClick={() => handleShowUpdate(product)}> Editar</Button>
              <button className='btn btn-danger' onClick={() => deleteProduct(product._id)}>Eliminar</button>
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
          value={productState.titulo}
          name="titulo"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el precio"
          value={productState.precio}
          name="precio"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la descripción"
          value={productState.descripcion}
          name="descripcion"
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
 {typeof productState.imagen === 'string' ? (
  <Imgs url={productState.imagen} alt={'producto'} width={'50%'} />
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
    <Button variant="primary" onClick={updateProduct}>
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

export default AdminProductsPage