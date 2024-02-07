import React from 'react';
import '../css/RegisterPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import clienteAxios, { jsonConfig } from '../helpers/axiosconfig';
import {useState } from 'react'; 

const RegisterPage = () => {

  const [formValues, setFormValues] = useState({
    user: '',
    email: '',
    pass: '',
    rpass: ''
  })
  const handleChange = (ev) => {
    setFormValues({ ...formValues, [ev.target.name]: ev.target.value })
  }

  const handleClick = async (ev) => {
    try {
      ev.preventDefault()
      const { user, email, pass, rpass } = formValues

      if (!user || !email || !pass || !rpass) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algun campo esta vacio!",
        });
      } else {
        if (pass === rpass) {
          const sendFormRegister = await clienteAxios.post('/users', {
            nombreUsuario: user,
            emailUsuario: email,
            contrasenia: pass,
          }, jsonConfig)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
    return (
      <div className="login-container">
        <div className="d-flex align-items-center justify-content-center wrap">
          <Form className="login-form">
            <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
              <Form.Label>Ingresar email</Form.Label>
              <Form.Control type="email" name='email' minLength={10} maxLength={80} value={formValues.email} onChange={handleChange} placeholder="Ingresar Email" />
              <Form.Text className=" text-white">
              Nunca compartiremos su correo electrónico con nadie más.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicName">
              <Form.Label>nombre</Form.Label>
              <Form.Control type="text" name='user' minLength={2} maxLength={40} value={formValues.user} onChange={handleChange} placeholder="Ingresar nombre" />
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
              <Form.Label>contraseña</Form.Label>
              <Form.Control type="password" name='pass' minLength={2} maxLength={40} value={formValues.pass} onChange={handleChange} placeholder="Contraseña" />
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicConfirmPassword">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control type="password" name='rpass' minLength={2} maxLength={40} value={formValues.rpass} onChange={handleChange} placeholder="Confirmar Contraseña" />
            </Form.Group>

            <Button variant="success" type="submit" onClick={handleClick}>
              Registrarse
            </Button>
          </Form>
        </div>
      </div>
    )
}

export default RegisterPage;

