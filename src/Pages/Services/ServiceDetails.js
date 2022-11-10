import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);

    const serviceDetail = useLoaderData();
    const { title, picture, price, description, facilities } = serviceDetail;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://fix-pc-server.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [reviews]);

    const handleReview = (event) => {
        event.preventDefault();
        console.log(event.target);
        const form = event.target;
        const userName = form.name.value;
        const review = form.review.value;
        console.log(review);

        const rev = {
            name: userName,
            text: review,
            picture: user.photoURL,
        };

        fetch("https://fix-pc-server.vercel.app/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(rev),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setReviews([...reviews, data]);
                form.reset();
            })
            .catch((error) => console.error(error));
    };

    return (
        <Container className="bg-light border shadow my-5 px-5">
            <Row className="my-5 gap-5">
                <h2>{title}</h2>
                <Col lg="5">
                    <img
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
                    {facilities ? (
                        facilities?.map((facility, index) => (
                            <div key={index}>
                                <h4>{facility.name}</h4>
                                <p>{facility.details}</p>
                            </div>
                        ))
                    ) : (
                        <h4 className="text-danger">
                            No Facilities were added!
                        </h4>
                    )}
                </Col>
            </Row>
            <Row className="my-5">
                <h2 className="mb-5">Reviews</h2>
                {user?.email ? (
                    <>
                        <Form onSubmit={handleReview}>
                            <Form.Group
                                className="mb-3"
                                controlId="nameForm.ControlInput"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    defaultValue={user.displayName}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="emailForm.ControlInput"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    defaultValue={user.email}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="reviewForm.ControlTextarea"
                            >
                                <Form.Label>Review</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="review"
                                    required
                                />
                            </Form.Group>
                            <Button type="submit" variant="dark">
                                Post
                            </Button>
                        </Form>
                        <h2 className="my-5">
                            Earlier Reviews {reviews.length}
                        </h2>
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
                                    <p className="bg-white p-3 rounded-3">
                                        {review.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        <p className="text-dark">
                            Please{" "}
                            <Link
                                className="text-decoration-none fw-bold"
                                to="/login"
                            >
                                login
                            </Link>{" "}
                            to add review!
                        </p>
                        <h2 className="my-5">
                            Earlier Reviews {reviews.length}
                        </h2>
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
                                    <p className="bg-white p-3 rounded-3">
                                        {review.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </Row>
        </Container>
    );
};

export default ServiceDetails;
