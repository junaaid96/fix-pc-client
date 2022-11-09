import React from "react";
import { Container } from "react-bootstrap";
import img from "../../Assets/not_found.jpg";

const NotFound = () => {
    return (
        <Container>
            <img src={img} alt="not-found" className="w-100" />
        </Container>
    );
};

export default NotFound;
