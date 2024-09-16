import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Aditya Sarfare</span> from Dublin, Ireland. I'm Software Engineer with a 3+ years of experience in developing scalable applications using Java, SQL, and Angular.js in Hexaware and Accenture.
            <br />
            <br />
           I have completed my Master’s in Information Systems and Computing from Dublin Business School and Bachelor's of Engineering from Mumbai University.
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
