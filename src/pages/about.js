import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Banner from "../components/banner";

import Layout from "../components/layout";
import SEO from "../components/seo";
import profileImage from "../images/me.jpeg";

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
          <Col sm={12} md={6} lg={4}>
            {/* <div className="profile-wrap">
                <img className="profile-image" src={profileImage} alt="profile" />
                <div className="social-container">
                  <Row justify="center">
                    <Col md={10}>
                      <p><i className="fas fa-user-circle"></i>Front-end Developer</p>
                      <p><i className="fas fa-map-marker-alt"></i>Brighton, England.</p>
                      <ul>
                        <li><a href="https://github.com/Angel-SG" target="_blank" rel="noopener noreferrer" title="github"><i className="fab fa-github-alt"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/angel-sg/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
                      </ul>
                      <Link to="/contact" className="view-projects" style={{ display:'block', marginRight: '0' }}>Get in touch!</Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={8}>
              <div className="about-main-copy">
             
                <div className="copy-section">
                  <h2>Skills & Expertise</h2>
                  <h3>Front-end Development</h3>
                  <p>Specialized in bringing designs and mock-ups to fully functioning web pages by using technologies like HTML, CSS, and javaScript. I also have experience coding with React.js and building fast and reliable UI. Understanding of how to work with CMS like WordPress or Contentful.</p>
                  <h3>Responsive Design</h3>
                  <p>Responsive web designs that will be multi-device compatible to give users high-quality browsing experience and user journey.</p>
                  <h3>Site optimization</h3>
                  <p>With the help of tools like Google Lighthouse and GTMetrics, I can have an insight into how websites perform on the web. Then by tacking this information into consideration, I apply the required changes to achieve the best possible performance.</p>
                  <h3>Marketing</h3>
                  <p>I have participated in several marketing campaigns by coding both HTML email templates and landing pages. I'm familiar with email services and frameworks like Foundation for emails, Mailchimp, Pure360, and testing tools like EOA or Litmus.</p>
                  <h3>Cross-browser compatibility </h3>
                  <p>All developed web pages are tested to ensure compatibility with different web browsers including Firefox, Google Chrome, Safari, and several versions of Internet Explorer.</p>
                  
                </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AboutPage;
