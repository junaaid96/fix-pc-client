import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

const AddService = () => {
    const [services, setServices] = useState([]);
    const notify = () =>
        toast.success(
            "Service Added Successfully. Check it out in the All Services."
        );

    useEffect(() => {
        fetch("https://fix-pc-server.vercel.app/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        // const facilities = form.facilities.value;
        const picture = form.picture.value;

        const service = {
            title,
            price,
            description,
            picture,
        };

        fetch("https://fix-pc-server.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(service),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setServices([...services, data]);
                form.reset();
                if (data.acknowledged) {
                    notify();
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <Container className="bg-light border shadow my-5 p-5">
            <h2 className="mb-5">Services: {services.length}</h2>
            <Form onSubmit={handleAddService}>
                <Form.Group className="mb-3" controlId="titleForm.ControlInput">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="title"
                        required
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
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="priceForm.ControlInput">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        name="price"
                        placeholder="price"
                        required
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
                        required
                    />
                </Form.Group>
                <Button type="submit" className="my-3" variant="dark">
                    Add Service
                </Button>
                <Toaster />
            </Form>
        </Container>
    );
};

export default AddService;
