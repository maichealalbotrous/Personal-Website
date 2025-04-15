import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./pojectscard.css";
import TrackVisibility from "react-on-screen";
import 'animate.css'
const Projectscard = ({ projects }) => {
  const projectCard = projects.map((project, index) => (
<TrackVisibility>
{({isVisible})=>(
 
 <div className={isVisible? "animate__animated animate__flipInX ":""} key={index}>
      <section className="ProjectCard">
        <Row>
          <Col sm={12} md={12} xl={12}>
            <div className="img_box">
              <img
                src={project.imgUrl}
                className="img-fluid"
                alt={project.title}
              />
            </div>
            <div className="project_desc">
              <h3 className="h3">{project.title}</h3>
              <p className="p">{project.description}</p>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  )}
  
    </TrackVisibility>
  ));

  return (
    <Row>
      <Col size={12}>
        <div className="main"> {projectCard} </div>
      </Col>
    </Row>
  );
};

export default Projectscard;
