import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Row, Col, Container } from "react-grid-system";
import styled from "styled-components";

const ProjectsList = (projects) => {
  console.log(projects.projects);

  return (
    <div>
      <Container>
        <Row>
          {projects.projects.map((item) => (
            <Col md={4} key={item.id}>
              <ProjectCard>
                {" "}
                <div className="project-card">
                  <Link
                    to={`/projects/${item.slug}`}
                    className="project-img-wrap"
                  >
                    <div className="overlay"></div>
                    <img src={item.smallImage.publicURL} alt="projectss" />
                    <div className="project-text-wrap">
                      <span className="project-title">
                        <p>{item.title}</p>
                      </span>
                    </div>
                  </Link>
                </div>
              </ProjectCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const ProjectCard = styled.div`
  .project-card {
    /* box-shadow: -2px 5px 17px -1px rgba(0, 0, 0, 0.12); */

    margin-bottom: 50px;
    border: lightgray;
    position: relative;
    cursor: pointer;
    max-height: 288px;
    transition: box-shadow 0.3s, filter 0.3s;

    &:hover {
      box-shadow: -2px 10px 10px -1px rgba(0, 0, 0, 0.18);
      transition: 0.3s;

      .project-text-wrap {
        top: 50%;
        p {
          opacity: 1;
        }
      }

      .overlay {
        opacity: 0.8;
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      background-color: #a2eae0;
      opacity: 0;
      width: 100%;
      height: 100%;
      transition: opacity 0.3s;
    }

    .project-img-wrap {
      max-height: 288px;
      min-height: 288px;
      overflow: hidden;
      position: relative;
      display: inherit;
      border: none;
      padding: 0;
      cursor: pointer;
      border-radius: 5px;

      &:focus {
        outline: none;
      }

      > img {
        width: 100%;
        /* filter: grayscale(10); */
        transition: 0.3s;
      }
    }

    .project-text-wrap {
      position: absolute;
      text-align: center;
      width: 100%;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: top 0.3s;

      > span {
        > p {
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          color: #495c64;
          z-index: 1;
          margin: 0;
          opacity: 0;
        }
      }
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        dataJson {
          projects {
            description
            id
            image {
              src {
                publicURL
              }
            }
            skills
            modalURL
            slug
            title
            smallImage {
              publicURL
            }
          }
        }
      }
    `}
    render={({ dataJson }) => (
      <ProjectsList projects={dataJson.projects} {...props} />
    )}
  />
);
