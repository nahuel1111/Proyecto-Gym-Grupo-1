import React from 'react'
import '../css/AboutUs.css'
import Button from 'react-bootstrap/Button';

const AboutUs = () => {
  return (
    <main className="main py-3">
      <div className="container1">

        <section className="box">
          <img src="https://i.postimg.cc/dt0NjsZN/holaperdida.jpg" width="100px" alt="Imagen-Nahuel" className="box-img" />
          <div className='texto-primera-cont'>
          <h2 className='texto-primera-1-cont'>Nahuel Pumara</h2>
          <h3 className='texto-primera-2-cont'>Programador Tech Lider</h3>
          <p className='text-center p-1'>Hola soy nahuel, tengo 22 años, estoy recibido de la "Tecnicatura en Programacion" de la UTN, quiero estudiar Ing. en Sistemas</p>
          </div>
        </section>

        <section className="box">
          <img src="https://i.postimg.cc/qMXnqyv9/xexitaaar.png" width="100px" alt="Imagen-Cesar" className="box-img" />
         <div className='texto-primera-cont'>
          <h2 className='texto-primera-1-cont'>Cesar Hermida</h2>
          <h3 className='texto-primera-2-cont'>Programador Scrum Master</h3>
          <p className='text-center p-1'>Hola, soy cesar, tengo 21 años, soy estudiante de la carrera de Ing. en Sistemas de la UTN. Trabajo como tecnico de Computadoras. </p>
          </div>
        </section>

      </div>
    </main>
  );
};



export default AboutUs