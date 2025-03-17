// src/components/Jumbotron.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Jumbotron = () => {
  return (
    <Container fluid className="jumbotron">
      <Row>
        <Col md={8} className="text-center text-md-left">
          <h1>Bienvenido a nuestra página</h1>
          <p>Aquí puedes encontrar los mejores productos y servicios.</p>
          <Button variant="primary" size="lg">
            Descubre más
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbotron;
