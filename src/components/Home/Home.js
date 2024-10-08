import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeIcon from "../../Assets/homeicons.svg";
import homeIcon from "../../Assets/HomeImage.webp";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

import Home2 from "./Home2";
import Type from "./Type";
import "./home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Aditya Sarfare</strong>
              </h1>

              <div style={{ padding: 30}} className="type">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeIcon}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: 50, width: '100%', height: '125%' }}
              />
            </Col>
          </Row>
        </Container>
        <Button
                  variant="primary"
                  href="https://drive.google.com/drive/folders/1ES6J5nwa3g2naxiygevV33peA4ZyBGN7?usp=sharing"
                  target="_blank"
                  style={{ marginLeft: "10px" }}
              >
                  <CgWebsite /> &nbsp;
                  {"Download Resume"}
              </Button>
      </Container>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}

export default Home;
