// src/components/Jumbotron.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Jumbotron = () => {
  return (
    <Container
      fluid
      className="jumbotron d-flex align-items-center justify-content-center text-center"
      style={{ minHeight: "50vh", backgroundColor: "#f1f3f5" }}
    >
      <Row>
        <Col>
          <h1>Software Developer</h1>
          <p>
            I am a software developer specializing in{" "}
            <strong>programming</strong>, <strong>web development</strong>, and
            solutions using <strong>Google Cloud</strong> and{" "}
            <strong>AWS</strong>.
          </p>
          <Button variant="primary" size="lg">
            Explore my projects
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbotron;
