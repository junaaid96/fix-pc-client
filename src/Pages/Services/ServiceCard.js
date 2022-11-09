import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceCard = ({ service }) => {
    const { _id, picture, title, price, description } = service;
    return (
        <Card className="m-4" style={{ width: "28rem" }}>
            <Card.Img variant="top" src={picture} height="300" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Button className="fw-bold" variant="outline-dark">Service Details</Button>
            </Card.Footer>
        </Card>
    );
};

export default ServiceCard;
