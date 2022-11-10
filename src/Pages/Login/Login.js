import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import img from "../../Assets/login.png";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const { existingUser, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [error, setError] = useState("");
    const notify = () =>
        toast.error(
            error === "Firebase: Error (auth/wrong-password)."
                ? "Incorrect Password!"
                : error
        );

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        existingUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setError("");
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
                notify();
            });
    };

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    };

    return (
        <Container className="bg-light p-5 my-5 border shadow">
            <Row className="gap-5">
                <Col lg="5">
                    <Form  onSubmit={handleSignIn}>
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
                                required
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
                                required
                            />
                            <div className="my-2">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <p className="text-danger">
                            {error && "An error occured. Check toast message!"}
                        </p>

                        <Button type="submit" variant="dark mb-4">
                            Sign In
                        </Button>
                        <Toaster />
                    </Form>
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
                            onClick={handleGoogleSignIn}
                        >
                            <FcGoogle /> Sign in with Google
                        </Button>
                    </div>
                </Col>
                <Col lg="5">
                    <img src={img} alt="login" className="w-100" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
