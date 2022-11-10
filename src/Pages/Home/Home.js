import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import LimitedServiceCard from "./LimitedServiceCard";

const Home = () => {
    const limitedServices = useLoaderData();

    return (
        <Container className="bg-light border shadow d-flex flex-wrap align-content-center justify-content-center my-5">
            {limitedServices.map((limitedService) => (
                <LimitedServiceCard
                    key={limitedService._id}
                    limitedService={limitedService}
                ></LimitedServiceCard>
            ))}
            <Link to="/services">
                <Button className="my-5 btn-lg" variant="outline-dark">See All</Button>
            </Link>
        </Container>
    );
};

export default Home;
