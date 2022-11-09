import React from "react";
import { Button, Container } from "react-bootstrap";
import { Form, Link } from "react-router-dom";

const Registration = () => {
    return (
        <Container className="bg-light p-5 my-5 border shadow">
            <Form className="w-50 m-auto py-5">
            <div className="form-outline mb-4">
                    <label className="form-label" for="formEmail">
                        Name
                    </label>
                    <input
                        type="email"
                        id="formEmail"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>
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
                </div>

                <button type="submit" className="btn btn-dark btn-block mb-4">
                    Sign Up
                </button>

                <div className="text-center">
                    <p>
                        Already have an account? <Link to="/login" className="text-decoration-none fw-bold text-dark">Login</Link>
                    </p>
                </div>
            </Form>
        </Container>
    );
};

export default Registration;
