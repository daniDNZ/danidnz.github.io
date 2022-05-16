import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Stack } from "react-bootstrap";

export default function Navigation() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Navbar key="lg" bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/">dani.sanz</Navbar.Brand>
                    <Navbar.Toggle onClick={handleShow} />
                    <Navbar.Offcanvas show={show} onHide={handleClose} id="navbar-nav" aria-labelledby="navbar-nav-label" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="navar-nav-label">
                                Menú
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="justify-content-end">
                        <Nav activeKey="1" onSelect={handleClose}>
                            <Nav.Link href="/" eventKey="1">Home</Nav.Link>
                            <NavDropdown title="Proyectos" id="projects-nav-dropdown" menuVariant="dark" >
                                <NavDropdown.Item href="/pages_example" eventKey="2.1" className="fw-lighter">Pages Example</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/2.2" eventKey="2.2" className="fw-lighter">Another example</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            
        </>
    )
} 