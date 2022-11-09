import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import img from "../../Assets/login.jpg";

const Login = () => {
    return (
        <Container className="bg-light p-5 my-5 border shadow">
            <Row className="gap-5">
                <Col lg="5">
                    <Form>
                        <div className="form-outline mb-4">
                            <label className="form-label" for="formEmail">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="formEmail"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" for="formPassword">
                                Password
                            </label>
                            <input
                                type="password"
                                id="formPassword"
                                className="form-control"
                                placeholder="Password"
                            />
                            <div className="my-2">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark mb-4">
                            Sign in
                        </button>

                        <div className="text-center">
                            <p>
                                New here?{" "}
                                <Link
                                    to="/registration"
                                    className="text-decoration-none fw-bold text-dark"
                                >
                                    Sign Up
                                </Link>
                            </p>
                            <Button
                                type="submit"
                                variant="light"
                                className="border"
                            >
                                <FcGoogle /> Sign in with Google
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col lg="5">
                    <img fluid src={img} alt="login" className="w-100"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
