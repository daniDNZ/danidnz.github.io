import { Col, Container, Row } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom";

export default function Headline() {


    return (
        <>
            <section>
                <Container className="pb-5">
                    <Row className="h-100">
                        <Col xs="12" md="5">
                            <div className="w-100 d-flex flex-row justify-content-center justify-content-md-end">
                                <img src="/img/dmoji.png" width="250em" height="250em" alt="Dani Memoji" className="mx-auto mx-md-0 float-md-end img-fluid" />

                            </div>
                        </Col>
                        <Col className="justify-content-center">
                            <div className="h-100 d-flex flex-column justify-content-center">
                                <h1 className="display-1 text-center text-md-start">Hola, soy Dani
                                </h1>
                                <h4 className="fw-lighter text-center text-md-start"> y soy desarrollador web junior.</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="w-100 d-flex flex-row justify-content-center">
                                <a href="https://www.linkedin.com/in/danielsanzelguer/" className="text-decoration-none text-light action">
                                    <BsLinkedin className="mx-2" style={{ fontSize: '2em' }} />
                                </a>
                                <a href="https://github.com/daniDNZ" className="text-decoration-none text-light">
                                    <BsGithub className="mx-2" style={{ fontSize: '2em' }} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}