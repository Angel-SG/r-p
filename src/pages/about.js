import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import profileImage from "../images/photo_about.jpg";

import { Container, Row, Col } from "react-grid-system";
// import Typing from 'react-typing-animation';

const AboutPage = () => {
  const [addClass, setAddClass] = useState("");

  useEffect(() => {
    setAddClass("loaded");
  }, []);

  return (
    <Layout>
      <SEO title="About" />

      <Container className={`about-wrap content-container ${addClass}`}>
        <Row>
          <Col sm={12} md={6}>
            <Img src={profileImage} alt="Me!" />
          </Col>
          <Col sm={12} md={6}>
            <TextContainer>
              <p>Hello there,</p>
              <p>
                I am Rose, a self taught Graphic Designer living in Burgess
                Hill, UK.
              </p>
              <p>
                I’ve always had an interest in Design, Arts and craft and it was
                a year ago when I took the decision to pursue my new career.
                After doing an extensive research I decided to start from
                scratch and learn about the complex world of Graphic Design.{" "}
              </p>
              <p>
                After a year and a half of self-studying, hard-work and
                persistence I have a pool of knowledge about design foundation,
                techniques and most commonly used tools. However, I feel that I
                still have a very long road ahead to continue developing my
                personal and design skills further.{" "}
              </p>
              <p>
                During this time I had the opportunity to work in some small
                real projects as well as practice projects that I achieved by
                following online tutorials and courses.
              </p>
              <p>
                I feel that I’m ready now to search for a junior position where
                I can expand my knowledge, creativity and the most important,
                help my future team and customers to fulfill their design needs.
              </p>
            </TextContainer>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 480px;
`;

const TextContainer = styled.div`
  padding-left: 30px;
  height: 100%;
  display: flex;

  justify-content: center;
  flex-direction: column;
`;

export default AboutPage;
