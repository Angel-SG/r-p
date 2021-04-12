import React from "react";
import Banner from "../components/banner";
import { Container, Row, Col } from 'react-grid-system';

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="About" />
      <Banner title="Ups!" />
      <Container className="about-wrap">
        <Row>
          <Col md={12} lg={4}>
             <h3>Something went wrong!...</h3>
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default NotFoundPage
