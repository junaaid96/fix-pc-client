import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { FcHome, FcPhone } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="text-center text-lg-start bg-light">
            <Container>
                <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with me</span>
                    </div>

                    <div>
                        <Link to="/" className="me-4 text-reset">
                            <FaFacebook />
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <FaTwitter />
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <FaLinkedin />
                        </Link>
                        <Link to="/" className="me-4 text-reset">
                            <FaGithub />
                        </Link>
                    </div>
                </div>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="fw-bold mb-4">
                                <TbHeartRateMonitor size={50} /> FixPC
                            </h6>
                            <p>
                                I'm always here to help. Fix your technical
                                issues within 24 hrs. You can get your desired
                                services according to your needs with free
                                consultancy.
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <FcHome /> Chittagong, Bangladesh
                            </p>
                            <p>
                                <FiMail /> info.junaidulislam@gmail.com
                            </p>
                            <p>
                                <FcPhone /> +880 123 456 7890
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center p-4">
                    © 2022 Copyright{" "}
                    <Link
                        to="/"
                        className="text-reset fw-bold text-decoration-none"
                    >
                        FixPC
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
