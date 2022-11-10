import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
    return (
        <Container className="bg-light border shadow my-5 p-5">
            <h3>Difference between SQL and NoSQL</h3>
            <p>
                SQL is used to interface with relational databases. NoSQL is a
                class of DBMs that are non-relational and generally do not use
                SQL. SQL databases are efficient at processing queries and
                joining data across tables, making it easier to perform complex
                queries against structured data, including ad hoc requests.
                NoSQL databases lack consistency across products and typically
                require more work to query data, particular as query complexity
                increases.
            </p>
            <h3>What is JWT, and how does it work?</h3>
            <p>
                JWTs are a good way of securely transmitting information between
                parties because they can be signed, which means you can be sure
                that the senders are who they say they are. Additionally, the
                structure of a JWT allows you to verify that the content hasn't
                been tampered with. JWT consists of three parts: a header,
                payload, and signature.
            </p>
            <h3>What is the difference between javascript and NodeJS?</h3>
            <p>
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed. Node.
                js is a cross-platform JavaScript runtime environment for
                servers and applications. It is built on a single-threaded,
                non-blocking event loop, the Google Chrome V8 JavaScript engine,
                and a low-level I/O API.
            </p>
            <h3>How does NodeJS handle multiple requests at the same time?</h3>
            <p>
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them.
            </p>
        </Container>
    );
};

export default Blog;
