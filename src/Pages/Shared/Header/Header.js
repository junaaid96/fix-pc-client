import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { TbHeartRateMonitor } from "react-icons/tb";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
    const { user, signingOut } = useContext(AuthContext);

    const handleSigningOut = () => {
        signingOut()
            .then(() => {})
            .catch((error) => console.error(error));
    };

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
                        className="mx-auto mx-2 my-3 gap-2"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Link
                            className="text-decoration-none text-dark fw-bold"
                            to="/"
                        >
                            <Button variant="outline-dark">Home</Button>
                        </Link>
                        <Link
                            className="text-decoration-none text-dark fw-bold"
                            to="/blog"
                        >
                            <Button variant="outline-dark">Blog</Button>
                        </Link>
                    </Nav>
                    <Nav className="gap-3 d-flex align-content-center justify-content-center">
                        {user?.email ? (
                            <>
                                <Link
                                    className="text-decoration-none text-dark fw-bold"
                                    to="/reviews"
                                >
                                    <Button variant="outline-dark">My Reviews</Button>
                                </Link>
                                <Link
                                    className="text-decoration-none text-dark fw-bold"
                                    to="/add-service"
                                >
                                    <Button variant="outline-dark">Add Service</Button>
                                </Link>
                                <Button
                                    variant="dark"
                                    onClick={handleSigningOut}
                                >
                                    Sign Out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="dark">Login</Button>
                                </Link>
                                <Link to="/registration">
                                    <Button variant="dark">
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
