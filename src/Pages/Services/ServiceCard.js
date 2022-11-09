import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, picture, title, price, description } = service;
    return (
        <Card className="m-4" style={{ width: "23rem" }}>
            <Card.Img variant="top" src={picture} height="300" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="fw-bold">${price}</Card.Text>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Link to={`/services/${_id}`}>
                    <Button className="fw-bold" variant="outline-dark">
                        Service Details
                    </Button>
                </Link>
            </Card.Footer>
        </Card>
    );
};

export default ServiceCard;
