import { useState } from "react"
import useHook from "./Hooks/Hooks"
import { useNavigate } from "react-router-dom"
import { Form, Button, Container } from 'react-bootstrap';

const Register = () => {
    const navegar = useNavigate()
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")

    const { onHandleChange, onSubmit } = useHook();
    const onRegister = (e) => {
        e.preventDefault();
        onHandleChange({ nombre, correo, contrasena });
        navegar("/Login", { replace: true });
        onSubmit();
    }
    return (
        <Container className="mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Registro</h2>
            <Form onSubmit={onRegister}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Introduce tu nombre completo"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCorreoRegistro">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Introduce tu correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContrasenaRegistro">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Introduce tu contraseña"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="success" type="submit" className="w-100">
                    Registrar
                </Button>
            </Form>
        </Container>
    );
};

export default Register;