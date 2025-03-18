// src/components/Home.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./Navbar";
import Jumbotron from "./Jumbotron";
import InfoCard from "./Card";
import Footer from "./Footer";

const cardData = [
  {
    title: "Project 1",
    text: "Project 1 description.",
    imageUrl: "https://via.placeholder.com/500x325",
    buttonText: "More details",
    link: "#card1",
  },
  {
    title: "Project 2",
    text: "Project 2 description.",
    imageUrl: "https://via.placeholder.com/500x325",
    buttonText: "More details",
    link: "#card2",
  },
  {
    title: "Project 3",
    text: "Project 3 description.",
    imageUrl: "https://via.placeholder.com/500x325",
    buttonText: "More details",
    link: "#card3",
  },
  {
    title: "Project 4",
    text: "Project 4 description.",
    imageUrl: "https://via.placeholder.com/500x325",
    buttonText: "More details",
    link: "#card4",
  },
];

const Home = () => (
  <div>
    <NavigationBar />
    <Container>
      <Jumbotron />
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col
            key={index}
            md={6}
            lg={3}
            className="d-flex justify-content-center"
          >
            <InfoCard {...card} />
          </Col>
        ))}
      </Row>
    </Container>
    <Footer />
  </div>
);

export default Home;
