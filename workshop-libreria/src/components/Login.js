import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { loginEmailPassword, loginGoogle } from '../redux/actions/actionLogin';

const Login = () => {
    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm( {
        email: '',
        password: ''
    })

    const { email, password} = values

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        reset()
    }
    const handleGoogle = () => {
        dispatch(loginGoogle())
    }
  return (
    <div className="container">
       <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit"  onClick={handleGoogle}>
                    Enviar
                </Button>
                <Link to="/registro">Registrarse</Link>
            </Form>

    </div>
  )
}

export default Login
