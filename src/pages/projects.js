import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Container, Row, Col } from "react-grid-system";
import ProjectsList from "../components/ProjectsList";

const ProjectsPage = () => {
  const [addClass, setAddClass] = useState("");

  useEffect(() => {
    setAddClass("loaded");
  }, []);

  return (
    <Layout>
      <SEO title="Projects" />

      <Container className={`home-main-wrap content-container ${addClass}`}>
        <Row>
          <Col md={12} sm={12}>
            <ProjectsList />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
