import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const AddService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://fix-pc-server.vercel.app/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <Container className="bg-light border shadow my-5 p-5">
            <h2 className="mb-5">Services: {services.length}</h2>
            <Form>
                <Form.Group className="mb-3" controlId="titleForm.ControlInput">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="title"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="pictureForm.ControlInput"
                >
                    <Form.Label>Picture</Form.Label>
                    <Form.Control
                        type="text"
                        name="picture"
                        placeholder="picture URL"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="priceForm.ControlInput">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        name="price"
                        placeholder="price"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="descriptionForm.ControlInput"
                >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        placeholder="description"
                    />
                </Form.Group>
                <Button className="my-3" variant="dark">Add Service</Button>
            </Form>
        </Container>
    );
};

export default AddService;
