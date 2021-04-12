import React from "react"

import { Container, Row, Col } from 'react-grid-system'
import { Link } from 'gatsby'
import Banner from "../components/banner";

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    
    <SEO title="About" />

      <Banner title="Cheers" />

      <Container className="about-wrap">
        <Row>
          <Col>
             <h2>Thanks for getting in touch. I will answer your query very soon!</h2>
             <Link to="/" className="view-projects" style={{ display:'inline-block', marginRight: '0', marginTop: '80px' }}>Back to Home</Link>
          </Col>
        </Row>
      </Container>

  </Layout>
)

export default Success
