import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <Container className="bg-light border shadow d-flex flex-wrap align-content-center justify-content-center my-5">
            {services.map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
        </Container>
    );
};

export default Services;
