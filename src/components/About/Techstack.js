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
        <h3>Java</h3>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>MySQl</h3>
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Angular</h3>
        <SiAngularjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Node.js</h3>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>SpringBoot</h3>
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>HTML5</h3>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>CSS3</h3>
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>JavaScript</h3>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Python</h3>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>MongoDB</h3>
        <DiMongodb />
      </Col>

    </Row>
  );
}

export default Techstack;
