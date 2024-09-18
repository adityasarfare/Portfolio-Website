
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Aditya_Crop2.jpg";
import Tilt from "react-parallax-tilt";
import rec1 from "../../Assets/Hexaware.png"
import rec2 from "../../Assets/Accenture.png"


import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiOutlineClose,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  useEffect(() => {
    const slider = document.getElementById("image-slider");
    let currentIndex = 0;

    function shiftSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        updateSlider();
    }

    function updateSlider() {
        const transformValue = `translateX(-${currentIndex * 100}%)`;
        slider.style.transform = transformValue;
    }

    const intervalId = setInterval(shiftSlide, 4000); // Auto-shift every 2 seconds

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
}, []); // Empty dependency array ensures this effect runs once after initial render
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
            WHY SHOULD YOU <span className="primary-header">HIRE</span> ME ?
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              Software Engineer with experience in developing scalable Full Stack applications using 
               <i className="primary-header">{" "}
                Java, SpringBoot, SQL, and Angular.js.
              </i>{" "}
    
              <br />
              <br />Worked as{" "}
              <i className="primary-header">Software Engineer</i>{" "}in{" "}
              <i className="primary-header">Hexaware and Accenture</i>{" "}for Fintech Client.
              <br />
             
              <br />Committed to continuous learning and staying updated with{" "} 
              <i>
                <i className="primary-header">emerging Technologies, 
                implementing Innovative tools and frameworks</i>{" "}
              </i>to drive innovation.
              <br />
              <br />Displayed creativity and maintained a high standard of quality in {" "}
              <i className="primary-header">programming and technical solutions</i>{" "}resulting in robust and reliable applications 
              <br />
              <br />
              Currently expanding my portfolio by building more{" "}
              <i className="primary-header">projects </i> that I can add
              here.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
              <br/><br/>
                  <h1 data-aos="fade-right">
                      ----------<span className="primary-header">INDUSTRIAL</span> PROJECTS ----------
                  </h1>
                  <div id="slider-container">
                      <div id="image-slider">
                          <img class="slider-image" src={rec1} alt="Recommendation 1" />
                          <img class="slider-image" src={rec2} alt="Recommendation 2" />
                          
                      </div>
                  </div>
              </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/adityasarfare"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/SarfareAditya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineClose />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:adityasarfare@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-sarfare-412a52169"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/aditya.sarfare.7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="facebook"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <form name="contact" method="POST" data-netlify="true" action="/thank-you"s netlify>
                  <p data-aos="fade-left">Your Contact</p>
                  <p>
                      <label>Name <input type="text" name="name" /></label>
                  </p>
                  <p>
                      <label>Mobile <input type="contact" name="contact" /></label>
                  </p>
                  <p>
                      <label>Email <input type="email" name="email" /></label>
                  </p>
                  <p>
                      <button type="submit">Send</button>
                  </p>
              </form>
      </Container>
    </Container>
  );
}
export default Home2;
