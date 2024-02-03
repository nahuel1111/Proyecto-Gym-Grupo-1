import React from 'react';
import '../css/RegisterPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';


const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    user: '',
    email: '',
    phone: '',
    pass: '',
    rpass: ''
  })

  const handleChange = (ev) => {
    setFormValues({ ...formValues, [ev.target.name]: ev.target.value })
  }

  const handleClick = async (ev) => {
    try {
      ev.preventDefault()
      const { user, email, phone, pass, rpass } = formValues

      if (!user || !email || !pass || !rpass || !phone) {
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
            telefono: phone,
            contrasenia: pass
          }, config)
        }
      }
    } catch (error) {
      console.log(error)
    }
    return (
      <div className="login-container">
        <div className="d-flex align-items-center justify-content-center wrap">
          <Form className="login-form">
            <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' value={formValues.email} onChange={handleChange} placeholder="Enter email" />
              <Form.Text className="text-muted text-white">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name" name='user' value={formValues.user} onChange={handleChange} placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="Phone" name='phone' value={formValues.phone} onChange={handleChange} placeholder="Phone" />
            </Form.Group>


            <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='pass' value={formValues.pass} onChange={handleChange} placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name='rpass' value={formValues.rpass} onChange={handleChange} placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="success" type="submit" onClick={handleClick}>
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default RegisterPage;

