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
      console.log ('estoy entrando a la funcion')
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
          console.log ('estoy entrando a funcion')
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
          <Form className="login-form" onSubmit={handleClick}>
            <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' value={formValues.email} onChange={handleChange} placeholder="Enter email" />
              <Form.Text className="text-muted text-white">
              Nunca compartiremos su correo electrónico con nadie más.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='user' value={formValues.user} onChange={handleChange} placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='pass' value={formValues.pass} onChange={handleChange} placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name='rpass' value={formValues.rpass} onChange={handleChange} placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="success" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    )
}

export default RegisterPage;

