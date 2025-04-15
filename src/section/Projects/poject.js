import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import './project.css';
import Projectscard from './Projectscard';

const Poject = () => {
const Project  = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: '/img/project-img1.png',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: '/img/project-img2.png',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: '/img/project-img3.png',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: '/img/project-img1.png',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: '/img/project-img2.png',
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: '/img/project-img3.png',
  },

];

  return (
    <section className="Projects">
      <h2>Projects</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

    
    
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col size={12}>
            <Nav
              variant="pills"
              className= "Nav justify-content-center align-items-center"
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
        
            <Tab.Content>

              <Tab.Pane eventKey="first" >
                <Projectscard
                projects = {Project}
                
                />

              </Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              <Tab.Pane eventKey="third">third tab content</Tab.Pane>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
};

export default Poject;
