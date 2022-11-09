import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import img from "../../Assets/signup.png";

const Registration = () => {
    return (
        <Container className="bg-light p-5 my-5 border shadow">
            <Row className="gap-5">
                <Col lg="5">
                    <Form>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="formName">
                                Name
                            </label>
                            <input
                                type="text"
                                id="formName"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="formEmail">
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
                            <label className="form-label" htmlFor="formPassword">
                                Password
                            </label>
                            <input
                                type="password"
                                id="formPassword"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>

                        <button type="submit" className="btn btn-dark mb-4">
                            Sign Up
                        </button>

                        <div className="text-center">
                            <p>
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-decoration-none fw-bold text-dark"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </Form>
                </Col>
                <Col lg="5">
                    <img src={img} alt="register" className="w-100" />
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;
