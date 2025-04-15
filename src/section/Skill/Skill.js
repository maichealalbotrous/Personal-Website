import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";
import "./Skill.css";
import 'animate.css';
const Skill = () => {
  const [TypingP, setTypingP] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setTypingP(true);
      } else {
        setTypingP(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [isscroll,setscrollTow] = useState(false);
useEffect(()=>{
  const onscroll=()=>{
    if(window.scrollY >= 1000)
    {
      setscrollTow(true);
    
    }else{
      setscrollTow(false);
    }
  }
  window.addEventListener('scroll',setscrollTow);
  return ()=>{window.removeEventListener('scroll',setscrollTow)};


},[isscroll])
  return (

  
   <section className={isscroll? "animate__animated animate__bounceInLeft Skill container-fluid  mb-4":"Skill container-fluid"}
   id="Skill"
   >
      <div className="container-fluid">
        <div className="col-12">
          <h1 className="H1_Skill">Skills</h1>

          <p className={TypingP ? "showTyping" : ""}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.<br></br> Lorem Ipsum has been the industry's standard
            dummy text.
          </p>

          <Carousel responsive={responsive} className="theCarousel">
            <div className="Item">
              <img src="/img/meter1.svg" />
              <h1>Web Development</h1>
            </div>

            <div className="Item">
              <img src="/img/meter1.svg" />
              <h1>Brand Identity</h1>
            </div>

            <div className="Item">
              <img src="/img/meter1.svg" />
              <h1>Logo Design</h1>
            </div>

            <div className="Item">
              <img src="/img/meter1.svg" />
              <h1>Logo Design</h1>
            </div>

            <div className="Item">
              <img src="/img/meter1.svg" />
              <h1>Web Development</h1>
            </div>
          </Carousel>
        </div>
      </div>
      <img className="img-fluid main-img" src="/img/color-sharp.png"/>
    
    </section>
    
 
  

    
  );
};

export default Skill;
