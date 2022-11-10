import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
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
    }, []);

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
                    {facilities.map((facility, index) => (
                        <div key={index}>
                            <h4>{facility.name}</h4>
                            <p>{facility.details}</p>
                        </div>
                    ))}
                </Col>
            </Row>
            <Row className="my-5">
                <h2 className="mb-5">Reviews: {reviews.length}</h2>
                {user?.email ? (
                    <>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="nameForm.ControlInput"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder={`${user.displayName}`}
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
                                    placeholder={`${user.email}`}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="reviewForm.ControlTextarea"
                            >
                                <Form.Label>Review</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="dark">Post</Button>
                        </Form>
                        <h2 className="my-5">Earlier Reviews</h2>
                        {reviews.map((review) => (
                            <>
                                <h5>{review.name}</h5>
                                <p className="bg-white p-3 rounded-3">
                                    {review.text}
                                </p>
                            </>
                        ))}
                    </>
                ) : (
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
                )}
            </Row>
        </Container>
    );
};

export default ServiceDetails;
