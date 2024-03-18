import React, { useEffect, useState } from 'react';
import '../css/Products.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imgs from '../components/Imgs';
import { Link } from 'react-router-dom';
import clienteAxios from '../helpers/axiosconfig'; 

const Products = () => {
    const [products, setProducts] = useState([]);

    const GetProducts = async () => {
        try {
            const response = await clienteAxios.get("/products");
            setProducts(response.data.getAllProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        GetProducts();
    }, []);

    return (
        <>
            <main className='fondo pt-4'>
                <Container>
                    <div className='titulo-productos'>
                        <h3>°Nuestra selección de productos:</h3>
                    </div>
                    <Row>
                        {products.map((product) => (
                            <Col md={4} className='ajuste mt-5 mb-4' key={product._id}>
                                <Card className='Card-Padre d-flex flex-column h-100 '>
                                    <Imgs url={product.imagen} alt={'producto'} width={'100%'} id={"imagen-cambios"} />
                                    <div className='mt-auto'>
                                    <Card.Body>
                                        <Card.Title>{product.titulo}</Card.Title>
                                        <Card.Text className='descripcion-card'>
                                            {product.descripcion}
                                        </Card.Text>
                                    </Card.Body>
                                 <div className='d-flex justify-content-center align-items-center'>

                                        <Link to={`/Product/${product._id}`}>
                                            <Button className='boton-card mb-4 centrar-button ' variant="primary">Ver Producto</Button>
                                        </Link>
                                 </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default Products;
