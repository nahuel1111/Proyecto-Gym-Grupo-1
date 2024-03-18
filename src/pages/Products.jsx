import React from 'react'
import '../css/Products.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imgs from '../components/Imgs';
import { useEffect, useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';

 import clienteAxios, { config } from '../helpers/axiosconfig'; 


const Products = () => {
    const [products, setProducts] = useState([]) 


    const GetProducts = async ()=>{
        const getproduct = await clienteAxios.get("/products")
        setProducts(getproduct.data.getAllProducts)
    }
    useEffect(() => {
        GetProducts()
      },[])
    return (
        <>
            <main className='fondo pt-4'>
                <Container>
                    <div className='titulo-productos'>
                        <h3>°Nuestra seleccion de productos:</h3>
                    </div>
                    <Row>
                        

                        {
                              products.map((product) =>
                              <Col md={4}>
                              <Card className='Card-Padre'>
                              <Imgs url={product.imagen} alt={'producto'} width={'100%'} />
                                  <Card.Body>
                                      <Card.Title>{product.titulo}</Card.Title>
                                      <Card.Text className='descripcion-card'>
                                     {product.descripcion}
                                      </Card.Text>
                                      <Link to={`/Product/${product._id}`}> <Button className='boton-card' variant="primary">Ver Producto</Button></Link>
                                  </Card.Body>
                              </Card>
                              </Col>
                              )
                        }
                           
                      
                    </Row>

                </Container>
            </main>
        </>
    )
}

export default Products