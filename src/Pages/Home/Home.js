import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Benefits from "./Benefits";
import LimitedServiceCard from "./LimitedServiceCard";
import Quotes from "./Quotes";

const Home = () => {
    const limitedServices = useLoaderData();

    return (
        <Container className="bg-light border shadow my-5">
            <h2 className="text-center mt-5">Services</h2>
            <div className="d-flex flex-wrap align-content-center justify-content-center">
                {limitedServices.map((limitedService) => (
                    <LimitedServiceCard
                        key={limitedService._id}
                        limitedService={limitedService}
                    ></LimitedServiceCard>
                ))}
                <Link to="/services">
                    <Button className="my-5 btn-lg" variant="outline-dark">
                        See All
                    </Button>
                </Link>
            </div>

            <Benefits></Benefits>
            <Quotes></Quotes>
        </Container>
    );
};

export default Home;
