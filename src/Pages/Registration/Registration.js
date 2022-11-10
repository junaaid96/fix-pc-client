import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { Form, Link } from "react-router-dom";
import img from "../../Assets/signup.png";
import { AuthContext } from "../../Contexts/AuthProvider";

const Registration = () => {
    const [error, setError] = useState("");
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const notify = () =>
        toast.error(
            error === "Firebase: Error (auth/email-already-in-use)"
                ? "This email address already in use. Try another email."
                : error
        );

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setError("");
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
                notify();
            });
    };
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        };

        updateUserProfile(profile)
            .then(() => {})
            .catch((error) => console.error(error));
    };

    return (
        <Container className="bg-light p-5 my-5 border shadow">
            <Row className="gap-5">
                <Col lg="5">
                    <Form onSubmit={handleSignUp}>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="formName">
                                Name
                            </label>
                            <input
                                type="text"
                                id="formName"
                                name="name"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="formName">
                                PhotoURL
                            </label>
                            <input
                                type="text"
                                id="formPhotoURL"
                                name="photoURL"
                                className="form-control"
                                placeholder="PhotoURL"
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="formEmail">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="formEmail"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label
                                className="form-label"
                                htmlFor="formPassword"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="formPassword"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <p className="text-danger">
                            {error && "An error occured. Check toast message!"}
                        </p>
                        <Button type="submit" variant="dark mb-4">
                            Sign Up
                        </Button>
                        <Toaster />

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
