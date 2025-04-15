import React, { useEffect, useState } from "react";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";
import "./Navbar.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Navbar = () => {
  const [active, setActiveLink] = useState("home");
  const [scroll, nonescoll] = useState(false);
 
  const UpdatetheactiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY > 50) {
        nonescoll(true);
      } else {
        nonescoll(false);
      }
    };

    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);

  }, []);



 

  return (
   <div className={nonescoll?"  animate__animated animate__swing":""}>
      <nav
       className= "container-fluid navbar navbar-expand-lg img-fluid"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/img/logo.svg" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={active === "home" ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    UpdatetheactiveLink("home");
                  }}
                  aria-current="page"
                  href="#Home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    active === "Skills" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => {
                    UpdatetheactiveLink("Skills");
                  }}
                  href="#Skills"
                  
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    active === "Projects" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => {
                    UpdatetheactiveLink("Projects");
                  }}
                  href="#Projects"
                >
                  Projects
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <a>
                <img src="/img/nav-icon1.svg" />
              </a>
              <a>
                <img src="/img/nav-icon2.svg" />
              </a>
              <a>
                <img src="/img/nav-icon3.svg" />
              </a>

              <button>Let’s Connect</button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
