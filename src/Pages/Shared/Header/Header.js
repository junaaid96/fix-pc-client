import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { TbHeartRateMonitor } from "react-icons/tb";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className="fw-bold">
                    <Link className="text-decoration-none text-dark" to="/">
                        <TbHeartRateMonitor size={50} /> FixPC
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto mx-2 my-lg-0 my-sm-3 gap-2"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Link
                            className="text-decoration-none text-dark fw-bold"
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="text-decoration-none text-dark fw-bold"
                            to="/services"
                        >
                            Services
                        </Link>
                        <Link
                            className="text-decoration-none text-dark fw-bold"
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </Nav>
                    <Form className="d-flex gap-2">
                        <Link to="/login">
                            <Button variant="dark">Login</Button>
                        </Link>
                        <Link to="/registration">
                            <Button variant="outline-dark">Sign Up</Button>
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
