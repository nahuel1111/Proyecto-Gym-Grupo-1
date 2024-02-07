import React from 'react'
import '../css/Error404.css'
import { Link } from 'react-router-dom';


const Error404 = () => {

  return (
    <>
        <main className='error-main'>
            <div className='contenedor'>
                <h1 className='texto-error'>ERROR 404</h1>
                <p className='texto-error-2'>"Nos olvidamos de ti! ya volvemos"</p>
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