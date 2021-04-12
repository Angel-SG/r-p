import React, { useEffect, useState } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import Layout from "../components/layout";
import styled from "styled-components";

const ProjectPage = ({ props }) => {
  const [addClass, setAddClass] = useState("");

  useEffect(() => {
    setAddClass("loaded");
  }, []);

  return (
    <Layout>
      <div className="project-page-container">
        <ProjectsWrap className="project-wrap">
          <div className={`content-container ${addClass}`}>
            <Link to="/" className="back-button">
              Back to Work
            </Link>
            <h1>{props.pageContext.title}</h1>

            <img src={props.pageContext.image} alt={props.pageContext.title} />
            <Container className="work-container">
              <Row>
                <Col md={8}>
                  <p>{props.pageContext.description}</p>
                </Col>
                <Col md={4}>
                  <div className="skills-container">
                    <ul>
                      <h3>Tools</h3>
                      {props.pageContext.skills.map((item, i) => {
                        return <li key={`${i}-technologies`}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </ProjectsWrap>
      </div>
    </Layout>
  );
};

const ProjectsWrap = styled.div`
  padding: 0;
  h1 {
    text-align: center;
    font-weight: 400;
    margin-bottom: 50px;
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 60px;
  }

  .work-container {
    margin-bottom: 160px;
    p {
      padding-right: 40px;
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson {
          edges {
            node {
              projects {
                description
                id
                modalURL
                skills
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allDataJson }) => <ProjectPage props={props} />}
  />
);
