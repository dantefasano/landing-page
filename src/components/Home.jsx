// src/components/Home.jsx
import React from "react";
import NavigationBar from "./Navbar";
import IntroJumbotron from "./Jumbotron";
import InfoCard from "./Card";
import Footer from "./Footer";
import { Row, Col } from "react-bootstrap";

const cardData = [
  {
    title: "Card 1",
    text: "This is card 1 description.",
    imageUrl: "https://via.placeholder.com/150",
    buttonText: "Go to Card 1",
    link: "#card1",
  },
  {
    title: "Card 2",
    text: "This is card 2 description.",
    imageUrl: "https://via.placeholder.com/150",
    buttonText: "Go to Card 2",
    link: "#card2",
  },
  {
    title: "Card 3",
    text: "This is card 3 description.",
    imageUrl: "https://via.placeholder.com/150",
    buttonText: "Go to Card 3",
    link: "#card3",
  },
];

const Home = () => (
  <div>
    <NavigationBar />
    <IntroJumbotron />
    <Row className="d-flex justify-content-around">
      {cardData.map((card, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <InfoCard
            title={card.title}
            text={card.text}
            imageUrl={card.imageUrl}
            buttonText={card.buttonText}
            link={card.link}
          />
        </Col>
      ))}
    </Row>
    <Footer /> {/* Aquí se agrega el Footer */}
  </div>
);

export default Home;
