import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UseLoginContext } from "../Components/Context/LoginContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap";


const InicioRouters = () => {
    const { login, isLogin, onLogOut } = useContext(UseLoginContext)
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {isLogin && <Navbar.Brand as={Link} to="/"><img
                            src={`https://unavatar.io/github/${login.nombre}`}
                            width="30"
                            height="30"
                            style={{ borderRadius: '50%' }}
                            className="d-inline-block align-top"
                            alt="Logo" /></Navbar.Brand>}
                    {!isLogin && 
                        <Navbar.Brand as={Link} to="/">
                            <img
                                src="https://img.icons8.com/?size=100&id=38731&format=png&color=000000" 
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /></Navbar.Brand>}
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/Servicio">Servicio</Nav.Link>
                            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                            {!isLogin && <Nav.Link as={Link} to="/Login">Acceder</Nav.Link>}
                            {!isLogin && <Nav.Link as={Link} to="/Register">Registro</Nav.Link>}
                            {isLogin && <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>}
                        </Nav>
                        {isLogin ? (
                            <div className="d-flex align-items-center">
                                <span className="me-3">{login.nombre}</span>
                                <Button variant="outline-danger" onClick={onLogOut}>Salir</Button>
                            </div>
                        ) : null}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}
export default InicioRouters