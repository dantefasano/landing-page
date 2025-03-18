// src/components/Card.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";

const InfoCard = ({ title, text, imageUrl, buttonText, link }) => (
  <Card className="m-3 text-center" style={{ width: "18rem" }}>
    <div style={{ width: "100%", height: "325px", overflow: "hidden" }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <Card.Body className="d-flex flex-column align-items-center">
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
    <hr
      className="m-0"
      style={{ width: "100%", borderTop: "1px solid #ccc" }}
    />{" "}
    {/* Division line */}
    <Card.Body className="d-flex justify-content-center">
      <Button variant="primary" href={link}>
        {buttonText}
      </Button>
    </Card.Body>
  </Card>
);

export default InfoCard;
