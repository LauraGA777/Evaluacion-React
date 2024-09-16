import { useContext, useState } from "react";
import useHook from "./Hooks/Hooks";
import { UseLoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
    const navegar = useNavigate();
    const loginLocalStorage = JSON.parse(localStorage.getItem("Ingreso"));
    const { onLoginAccess } = useContext(UseLoginContext);
    const { onSubmit } = useHook();

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        if (!loginLocalStorage) {
            alert("No se encontraron datos de inicio de sesión en el almacenamiento local.");
        } else if (correo === loginLocalStorage.correo && contrasena === loginLocalStorage.contrasena) {
            onLoginAccess(loginLocalStorage);
            navegar("/Dashboard", {
                replace: true
            });
        } else {
            alert("Correo electrónico o contraseña incorrectos.");
        }
        onSubmit();
    };

    return (
        <Container className="mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Inicio de Sesión</h2>
            <Form onSubmit={onLogin}>
                <Form.Group className="mb-3" controlId="formCorreoLogin">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Introduce tu correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContrasenaLogin">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Introduce tu contraseña"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Acceder
                </Button>
            </Form>
        </Container>
    );
};

export default Login;