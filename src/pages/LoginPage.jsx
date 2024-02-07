import { useState } from 'react';
import '../css/LoginPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import clienteAxios, { jsonConfig } from '../helpers/axiosconfig';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email:'',
    pass:''
  })

  const handleChange = (ev) => {
    setFormValues({...formValues, [ev.target.name]: ev.target.value})
  }

  const handleClick = async(ev)=> {
  try {
    ev.preventDefault()
    if(!formValues.email || !formValues.pass){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algun campo esta vacio!",
      });
    }else{
      const sendFormLogin = await clienteAxios.post('/users/login',{
        emailUsuario:formValues.email,
          contrasenia: formValues.pass
      }, jsonConfig)

      if(sendFormLogin.status === 200){
        Swal.fire({
          title: "Inicio de sesion OK!",
          icon: "success"
        });

         if(sendFormLogin.data.role === 'admin'){
          sessionStorage.setItem('token', JSON.stringify(sendFormLogin.data.token))
          sessionStorage.setItem('role', JSON.stringify(sendFormLogin.data.role))
          sessionStorage.setItem('idUsuario', JSON.stringify(sendFormLogin.data.idUsuario))
          navigate('/AdminPage')
         }else{
          sessionStorage.setItem('token', JSON.stringify(sendFormLogin.data.token))
          sessionStorage.setItem('role', JSON.stringify(sendFormLogin.data.role))
          sessionStorage.setItem('idUsuario', JSON.stringify(sendFormLogin.data.idUsuario))
          navigate('/HomePage')
         }
      }
    }
  } catch (error) {
    if(error.response.status === 400){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario y/o contraseña incorrecto!",
      });
    }
  }
  }
  return (
    <div className="login-container">
      <div className="d-flex align-items-center justify-content-center wrap">
        <Form className="login-form">
          <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
            <Form.Label>Ingresar Email</Form.Label>
            <Form.Control type="email" name='email' maxLength={65} minLength={8} value={formValues.email} onChange={handleChange} placeholder="Ingresar Email" />
            <Form.Text className=" text-white">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>

            
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" name='pass'  maxLength={45} minLength={8} value={formValues.pass} onChange={handleChange} placeholder="Ingresar Contraseña" />
          </Form.Group>

          <Button variant="success" type="submit" onClick={handleClick}>
            Ingresar Sesion
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

