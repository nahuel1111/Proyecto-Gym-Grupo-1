import React from 'react'
import '../css/ProductPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imgs from '../components/Imgs';

const ProductPage = () => {
    return (
        <>
            <main className='main-Padre'>
            <Container className='mt-5'>
            <div class="DivNombre">
                        <h3 class="">PACK ZEUS - 2 WHEY PROTEIN ZEUS DE 2 KG - (4 KILOS DE PROTEÍNA) CAPPUCCINO</h3>
                        <p class="opacity-50">SKU:4078870</p>
                    </div>
                    
                <Row>
                        <Col>
                            <Imgs url={'https://i.postimg.cc/8zkFtbB7/imagen-2024-01-23-175531892.png'} alt={'Foto Proteina'} width={'80%'} id={'Producto1'} />
                        </Col>
                        <Col>
                            <div className='divList p-4'>
                                <ul className='list-group list-group-flush'>
                                    <div className='text-center text-light'>
                                        <h1 className='fs-1 bg-transparent li-1'>$34.999</h1>
                                        <p class="fs-5">12 cuotas sin interés de $4.812</p>
                                        <p class="fs-6 m-0">Sin interés del precio de lista</p>
                                    </div>
                                    <div className='list-2 container d-flex text-light'>
                                        <div class="preciosTex w-50 text-light">
                                            <p>Precio en Efectivo</p>
                                            <p>Tarjeta Ahora 12</p>
                                            <p>Precio de Lista</p>
                                        </div>
                                        <div class="text-end w-75 text-light">
                                            <p>$34.999</p>
                                            <p>$57.749</p>
                                            <p>$57.749</p>
                                        </div>
                                    </div>
                                    <div></div>
                                    <p className="text-decoration-underline text-light"><i></i> Producto con Stock </p>
                                    <p className="text-decoration-underline text-light"><i></i> Sabores/Variedades: Cafe - Cappuccino </p>
                                    <p className="text-decoration-underline text-light"><i></i> Envio a todo el Pais </p>
                                    <button type="button" className="button text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Añadir Al Carrito
                                    </button>
                                </ul>
                            </div>
                        </Col>
                </Row>
                            <div className='descripcion-Padre'>
                                <div className='descripcion-Hijo '>
                                    <ul className=''>Características</ul>
                                    <li>Alimento alto en proteínas en base a suero de leche, ultrafiltradas, aisladas e hidrolizadas, de alto valor biológico. De completa composición de aminoácidos y una óptima absorción.</li>
                                    <li>° Naturalmente alto en leucina.</li>
                                    <li>° Adición de lactasa / fácil digestión.</li>
                                    <li>° Bajo en carbohidratos y grasas.</li>
                                    <li>° Recuperación.</li>
                                    <li>° Crecimiento muscular.</li>
                                    <ul>Modo de Uso</ul>
                                    <li>
                                    Se recomienda consumir de 1 a 2 porciones al día, o lo prescrito por su nutricionista. Mezclar 1 scoop en 250 ml. de agua (o cualquier bebida de su preferencia).
                                    Inmediatamente terminada la actividad física o entrenamiento.
                                    En la noche antes de dormir o entrar en reposo.
                                    Al desayuno con yogur, leche o agua.
                                    Como reemplazo o complemento de una merienda.
                                    </li>
                                </div>
                            </div>
            </Container>
            </main>

        </>
    )
}

export default ProductPage