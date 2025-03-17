// src/components/Card.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";

const InfoCard = ({ title, text, imageUrl, buttonText, link }) => (
  <Card className="m-3" style={{ width: "18rem" }}>
    <Card.Img variant="top" src={imageUrl} alt={title} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button variant="primary" href={link}>
        {buttonText}
      </Button>
    </Card.Body>
  </Card>
);

export default InfoCard;
