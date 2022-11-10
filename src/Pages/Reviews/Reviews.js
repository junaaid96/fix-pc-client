import React from "react";
import { Container, Image } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Reviews = () => {
    const reviews = useLoaderData();
    return (
        <Container className="bg-light p-5 my-5 border shadow">
            {reviews.map((review, index) => (
                <div key={index}>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                        <Image
                            roundedCircle
                            src={review.picture}
                            alt="avatar"
                            height={50}
                        />
                        <h5>{review.name}</h5>
                    </div>
                    <div>
                        <p className="bg-white p-3 rounded-3">{review.text}</p>
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default Reviews;
