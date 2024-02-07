import React from 'react'
import '../css/HeroPage.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
const HeroPage = () => {
  return (
    <div class="wrap">
  <div class="wrap-texto">
    <h1>Transforma tu vida</h1>
    <p>"Descubre tu potencial, forja tu cuerpo y conquista tus metas en nuestro gimnasio. Con un equipo de expertos y un ambiente motivador, te acompañamos en cada paso de tu viaje hacia una versión más fuerte y saludable de ti mismo.
       ¡Bienvenido a un nuevo nivel de fitness y bienestar!"</p>
       <Link to={"/LoginPage"}>    <Button className='boton-1' variant="success mb-2">Iniciar sesion</Button></Link>
 <Link to={"/RegisterPage"}>   <Button className='boton-1' variant="success mb-2">Registrarse</Button></Link>
  </div>
</div>

  )
}

export default HeroPage