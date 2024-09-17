import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiJenkins,
SiIntellijidea,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
       <h3>Git</h3>
        <SiGit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Jenkins</h3>
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Visualstudiocode</h3>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Linux</h3>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Postman</h3>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Docker</h3>
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Intellijidea</h3>
        <SiIntellijidea />
      </Col>
     
     
    </Row>
  );
}

export default Toolstack;
