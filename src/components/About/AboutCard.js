import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
          Hi Everyone,
          I’m <span className="primary-header">Aditya Sarfare</span>, a Software Engineer currently based in Dublin, Ireland. With over 3 years of experience, I specialize in developing scalable applications using technologies such as Java, SQL, and Angular.js. Throughout my career, I have had the opportunity to work with leading organizations like Hexaware and Accenture, where I honed my skills in software development and project execution. from Dublin, Ireland.
            <br />
            I hold a Master's degree in Information Systems and Computing from Dublin Business School, complemented by a Bachelor's degree in Engineering from Mumbai University. I'm passionate about leveraging technology to solve complex problems and am always eager to learn and grow in the ever-evolving tech landscape.
           <br />
           In addition to coding, here are some other soft skills which I have!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Active Listening
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Quick Learner
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight />  Creative & Solution Oriented Thinking
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Communicator and Collaborator 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
