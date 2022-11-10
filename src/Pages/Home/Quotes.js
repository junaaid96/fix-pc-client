import React from "react";
import { Card, Container } from "react-bootstrap";

const Quotes = () => {
    return (
        <Container className="p-5 mb-5">
            <h2 className="text-center mb-5">Motivate yourself</h2>
            <Card>
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote p-5 m-5">
                        <p>
                            {" "}
                            Yesterday You Said Tomorrow, JUST DO IT... <br />
                            Don't let yesterday take up too much of today!{" "}
                        </p>
                        <footer className="blockquote-footer">
                            Someone <cite title="Source Title">Unknown</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Quotes;
