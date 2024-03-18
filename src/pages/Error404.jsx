import React from 'react'
import '../css/Error404.css'
import { Link } from 'react-router-dom';


const Error404 = () => {

  return (
    <>
        <main className='error-main'>
            <div className='contenedor'>
                <h1 className='texto-error'>ERROR 404</h1>
                <div className='div-texto-error'>
                <p className='texto-error-2 text-center'>"Parece que has levantado un peso demasiado pesado, esta página no puede ser cargada. 
                                                Intentemos un ejercicio diferente para encontrar lo que buscas."</p>
                </div>
                <Link to="/HomePage">
          <button className='texto-error-3' type='button'>Regresar al Gym</button>
        </Link>
            </div>
            <div className='capa'></div>
        </main>
    </>
  )
}

export default Error404