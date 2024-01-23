import React from 'react'
import '../css/HeroPage.css'
import Button from 'react-bootstrap/Button';
const HeroPage = () => {
  return (
    <div class="wrap">
  <div class="wrap-texto">
    <h1>Transforma tu vida</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit hic tenetur rem quasi nulla quibusdam? Ducimus commodi temporibus quae placeat.</p>
    <Button variant="success mb-2">Iniciar sesion</Button>{' '}
    <Button variant="success mb-2">Registrarse</Button>{' '}
  </div>
</div>

  )
}

export default HeroPage