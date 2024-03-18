import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imgs from '../components/Imgs';
import Swal from 'sweetalert2';
import '../css/ProductPage.css'
import { useEffect, useState } from 'react'; 
 import clienteAxios, { config } from '../helpers/axiosconfig'; 
 import { useParams } from 'react-router-dom';
const ProductPage = () => {
    const [product, setProduct] = useState({}) 
const use = useParams()
const GetOneProduct = async ()=>{
    const oneproduct= await clienteAxios.get(`/products/${use.id}`)
    setProduct(oneproduct.data.getProduct)
}

const ComprarProducto=()=>{
    Swal.fire({
        title: "Producto reservado con Exito, Te espera en el Gimnasio",
        icon: "success"
      });
}
    useEffect(() => {
        GetOneProduct()
      },[])
    return (
        <>
            <main className='main-Padre'>
            <Container>
            <div className="DivNombre">
                        <h3 className='titulo-producto'>{product.titulo}</h3>
                        <hr className='text-light' />
                                       </div>
                    
                <Row>
                        <Col>
                            <Imgs url={product.imagen} alt={'producto'} width={'80%'} id={'Producto1'} />
                        </Col>
                        <Col>
                            <div className='divList p-4'>
                                <ul className='list-group list-group-flush'>
                                    <div className='text-center text-light'>
                                        <h1 className='fs-1 bg-transparent li-1'>$ {product.precio}</h1>
                                    </div>
                                    <p className="text-decoration-underline text-light mt-5"><i></i> ° Producto con Stock </p>

                                    <button type="button" onClick={ComprarProducto} className="button text-light mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Se Compra en el local
                                    </button>
                                </ul>
                            </div>
                        </Col>
                </Row>
                            <div className='descripcion-Padre'>
                                <div className='descripcion-Hijo '>
                                    <p>
                                {product.descripcion}
                                    </p>
                                </div>
                            </div>
            </Container>
            </main>

        </>
    )
}

export default ProductPage