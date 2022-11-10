import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Reviews = () => {
    const reviews = useLoaderData();
    return (
        <Container className="bg-light p-5 my-5 border shadow">
            {reviews.map((review, index) => (
                <div key={index}>
                    <h5>{review.name}</h5>
                    <p className="bg-white p-3 rounded-3">{review.text}</p>
                </div>
            ))}
        </Container>
    );
};

export default Reviews;
