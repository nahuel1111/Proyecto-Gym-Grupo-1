import React from 'react'
import '../css/products.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imgs from '../components/Imgs';
import CardsC from '../components/CardsC';


const Products = () => {
    return (
        <>
            <main className='fondo pt-4'>
                <Container>
                    <div className='titulo-productos'>
                        <h3>°Nuestra seleccion de productos:</h3>
                    </div>
                    <Row>
                        <Col>
                            <Card className='Card-Padre'>
                            <Imgs url={'https://i.postimg.cc/Xqjcrr98/imagen-2024-02-06-222405338.png'} alt={'Proteina Zeus'} width={'100%'} />
                                <Card.Body>
                                    <Card.Title>PACK ZEUS - 2 WHEY PROTEIN ZEUS DE 2 KG</Card.Title>
                                    <Card.Text className='descripcion-card'>
                                    Alimento alto en proteínas en base a suero de leche, ultrafiltradas, aisladas e hidrolizadas, de alto valor biológico. 
                                    De completa composición de aminoácidos y una óptima absorción.
                                    </Card.Text>
                                    <Button className='boton-card' variant="primary">Ver Producto</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </main>
        </>
    )
}

export default Products