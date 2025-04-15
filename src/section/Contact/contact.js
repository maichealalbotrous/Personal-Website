import React, { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "animate.css";
import "./contact.css";
import emailjs from "@emailjs/browser";
   
const Contact = () => {
  const NewForm = {
    firstname: "",
    lastname: "",
    Email: "",
    Phonenumber: "",
    letter: "",
  
};

  const [form, setform] = useState(NewForm);
const [scroll,setscroll] = useState(false);
  const setnewform = (cat, value) => {
    setform({ ...form, [cat]: value });

  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mf6ydif", "template_1z6bbri", form, {
        publicKey: "aYqSTmyPtRKk07ghZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    
  };



useEffect(()=>{
  const onscroll=()=>{
    if(window.scrollY >= 2700)
    {
      setscroll(true);
      console.log("mmm")
    }else{
      setscroll(false);
    }
  }
  window.addEventListener('scroll',onscroll);
  return ()=>{window.removeEventListener('scroll',onscroll)};


},[scroll])
  return (

    
    <section className="Content_section">
      <div className={scroll?"animate__animated animate__bounceInRight" :""}>
      <h1>Contact Ass</h1>
      <form>
        <Row>
          <Col>
            <input
            value={form.firstname}
              type="text"
              className="FirstName"
              placeholder="FirstName"
              onChange={(e) => {
                setnewform("firstname", e.target.value);
              }}
            />
          </Col>
          <Col>
            <input
            value={form.lastname}
              type="text"
              className="lastname"
              placeholder="lastname"
              onChange={(e) => {
                setnewform("lastname", e.target.value);
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <input
            value={form.Email}
              type="text"
              className="EmailAdress"
              placeholder="EmailAddress"
              onChange={(e) => {
                setnewform("Email", e.target.value);
              }}
            />
          </Col>
          <Col>
            <input
            value={form.Phonenumber}
              type="text"
              className="PhoneNumber"
              placeholder="PhoneNumber"
              onChange={(e) => {
                setnewform("Phonenumber", e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="text" className="Letter" placeholder="Letter"  onChange={(e)=>{setnewform('letter',e.target.value)}}/>
            <button onClick={sendEmail}>Send</button>
          </Col>
        </Row>
      </form>
      </div>
    </section>
  );
};

export default Contact;
