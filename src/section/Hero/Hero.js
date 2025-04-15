import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TrackVisibility from "react-on-screen";
import "./Hero.css";
import "animate.css";

const Hero = () => {
  return (
    <section className="Hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="Welcome_letter">Welcome to my website</span>
                  <h1>Hi, I'm a Frontend Developer</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p>Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s</p>
                  <p>
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <button>Let’s Connect</button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img
              className="img-fluid"
              src="/img/header-img.svg"
              alt="Header Image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
