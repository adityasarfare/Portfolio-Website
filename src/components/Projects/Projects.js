import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import CyberBullying from "../../Assets/Projects/WhatsApp_CyberBullying.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Usermanagment from "../../Assets/Projects/UserLogin.png";
import Ecart from "../../Assets/Projects/ecart.png";


import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Projects </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E-Cart using Microservices"
              description="This is a fully functional eCommerce backend website that is based on microservices build using SpringBoot, Service Discovery, API Gateway, Security Using KEYCLOAK, REsilience 4J Circuit breaker, Distributed tracing using zipkin."
              ghLink="https://github.com/adityasarfare/springboot-microservices/tree/master"
              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Usermanagment}
              title="User Managment"
              description="Users management Portal using Spring-boot,, Mysql | Spring-Security, JWT, Roles, Auth. The system includes user registration, login, role-based access, and JWT token management for secure authentication. "
              ghLink="https://github.com/adityasarfare/Tenant-Rent-Management/tree/main/loginregistration"
              // demoLink="https://rahuljha.info/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={CyberBullying}
              title="CYBER BULLY DETECTION USING MACHINE LEARNING ALGORITHMS"
              description="This project is exclusively done for kids who are new to social media. To prevent such harassment, I use Machine learning algorithms to detect the use of abusive words by bullies automatically. At the same time, I use deep learning algorithms to detect porn and nude images."
              ghLink="https://github.com/adityasarfare/Dissertation"
             
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/adityasarfare/Portfolio-Website"
              
            />
          </Col>
         

         
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
