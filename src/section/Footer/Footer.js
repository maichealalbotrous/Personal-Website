import React, { useState } from "react";
import { useEffect } from "react";
import "./Footer.css";
import TrackVisibility from "react-on-screen";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap";
import "animate.css";
const Footer = () => {
  const [scroll, setscroll] = useState(false);

  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY >= 2900) {
        setscroll(true);
        console.log("mmm");
      } else {
        setscroll(false);
      }
    };
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, [scroll]);
  return (
    <footer
      className={scroll ? "animate__animated animate__fadeInLeftBig" : ""}
    >
      <Row>
        <Col>
          <img className="logo" src="/img/logo.svg" />
        </Col>
        <Col>
          <div>
            <a>
              <img className="icon" src="/img/nav-icon1.svg" />
            </a>
            <a>
              <img className="icon" src="/img/nav-icon2.svg" />
            </a>
            <a>
              <img className="icon" src="/img/nav-icon3.svg" />
            </a>
            <p>Copyright 2022. All Rights Reserved</p>
            <h1>
              <span>made by :</span>{" "}
              <img src="/img/Screenshot 2024-11-27 135511.png" />
            </h1>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
