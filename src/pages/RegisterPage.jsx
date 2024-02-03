import React from 'react';
import '../css/RegisterPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterPage = () => {
    return (
      <div className="login-container">
        <div className="d-flex align-items-center justify-content-center wrap">
          <Form className="login-form">
            <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" />
              <Form.Text className="text-muted text-white">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            {/* <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group> */}

          <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="Name" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="Phone" placeholder="Phone" />
          </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }

export default RegisterPage;

