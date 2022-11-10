import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import img from "../../Assets/benefits.jpg";

const Benefits = () => {
    return (
        <Container className="mb-5">
            <h1 className="text-center mb-5">Benefits</h1>
            <Row className="gap-5">
                <Col lg="5" className="p-5">
                    <ul>
                        <li className="fw-bold">Tech Updates</li>
                        <li className="fw-bold">Free Consultancy</li>
                        <li className="fw-bold">Reliable Services</li>
                        <li className="fw-bold">Reasonable Pricing</li>
                        <li className="fw-bold">AI based Troubleshooting</li>
                    </ul>
                </Col>
                <Col lg="6">
                    <Image rounded src={img} alt="benefits" className="w-100" />
                </Col>
            </Row>
        </Container>
    );
};

export default Benefits;
