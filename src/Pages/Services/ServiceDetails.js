import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const serviceDetail = useLoaderData();
    const { title, picture, price, description, facilities } = serviceDetail;
    return (
        <Container className="bg-light border shadow my-5 px-5">
            <Row className="my-5 gap-5">
                <h2>{title}</h2>
                <Col lg="5">
                    <img
                        fluid
                        src={picture}
                        alt="service-cover"
                        height={500}
                        className="w-100 mb-4"
                    />
                    <h4>Price: ${price}</h4>
                    <p>{description}</p>
                </Col>
                <Col lg="5">
                    <h2 className="mb-5">Facilities</h2>
                    {facilities.map((facility) => (
                        <>
                            <h4>{facility.name}</h4>
                            <p>{facility.details}</p>
                        </>
                    ))}
                </Col>
            </Row>
            <Row className="my-5">
                <h1>Reviews</h1>
            </Row>
        </Container>
    );
};

export default ServiceDetails;
