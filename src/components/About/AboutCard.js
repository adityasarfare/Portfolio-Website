import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>

          Hello, everyone. My name is <span className="primary-header">Aditya Sarfare</span>, and I am a Software Engineer currently residing in <span className="primary-header">Dublin, Ireland</span>. With over three years of professional experience, I specialize in developing scalable applications using technologies such as Java, SQL, and Angular.js. My career has afforded me the opportunity to work with prominent organizations like Hexaware and Accenture, where I refined my expertise in software development and project management.
            <br />
          I hold a Master's degree in Information Systems and Computing from Dublin Business School, along with a Bachelor's degree in Engineering from Mumbai University. I am deeply passionate about utilizing technology to address complex problems and am consistently seeking opportunities to learn and grow in the rapidly evolving tech landscape.
           <br />
           Beyond coding, I have developed a range of soft skills that complement my technical abilities.          </p>
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
