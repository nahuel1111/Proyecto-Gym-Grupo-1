import React from 'react'
import '../css/AboutUs.css'
import Button from 'react-bootstrap/Button';

const AboutUs = () => {
  return (
    <main className="main py-3">
      <div className="container">

        <section className="box">
          <img src="https://i.postimg.cc/YSqGw6Cf/marti.jpg" width="100px" alt="" className="box-img" />
          <h2>Martina Sansone</h2>
          <h3>Encargada de GIT. Programadora</h3>
          <p>Tengo 20 años, amo cocinar, quiero estudiar una tecnicatura en programación</p>
          <ul>
            <li><a href="link_de_facebook"><i className="bi bi-facebook"></i></a></li>
            <li><a href="link_de_instagram"><i className="bi bi-instagram"></i></a></li>
            <li><a href="link_de_twitter"><i className="bi bi-twitter"></i></a></li>
            <li><a href="link_de_whatsapp"><i className="bi bi-whatsapp"></i></a></li>
          </ul>
        </section>

        <section className="box">
          <img src="https://i.postimg.cc/dt0NjsZN/holaperdida.jpg" width="100px" alt="" className="box-img" />
          <h2>Nahuel Pumara</h2>
          <h3>Programador</h3>
          <p>Soy Nahuel Pumara y soy re 5</p>
        </section>

        <section className="box mb-5">
          <img src="https://i.postimg.cc/qMXnqyv9/xexitaaar.png" width="100px" alt="" className="box-img" />
          <h2>Cesar Hermida</h2>
          <h3>Programador Scrum Master</h3>
          <p>Hola, soy xexitaar y hago asados.</p>
        </section>

      

      </div>
    </main>
  );
};



export default AboutUs