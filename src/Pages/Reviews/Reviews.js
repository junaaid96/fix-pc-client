import React, { useContext, useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { AuthContext } from "../../Contexts/AuthProvider";

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://fix-pc-server.vercel.app/reviews?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [user?.email]);

    return (
        <Container className="bg-light p-5 my-5 border shadow">
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="border border-dark rounded-1 mb-2 border-opacity-25"
                >
                    <div className="d-flex flex-wrap align-items-center gap-2 p-2">
                        <Image
                            roundedCircle
                            src={review.picture}
                            alt="avatar"
                            height={50}
                        />
                        <h5>
                            <strong>{review.name}</strong> reviewed on{" "}
                            <span className="fw-bold text-primary">
                                {review.title}
                            </span>
                        </h5>
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
