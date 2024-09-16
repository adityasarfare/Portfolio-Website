import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  // DiReact,
  DiNodejs,
  DiMongodb,
  // DiGit,
  DiJava,
  DiMysql,
  DiHtml5,
  DiPython
  
} from "react-icons/di";
import {
  // SiFirebase,
  // SiNextdotjs,
  SiCss3,
  // SiRedux,
  // SiMui,
  SiAngularjs,
  SiSpringboot
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb/>
      </Col>
      
    </Row>
  );
}

export default Techstack;
