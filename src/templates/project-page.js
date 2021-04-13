import React, { useEffect, useState } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import Layout from "../components/layout";
import styled from "styled-components";
import AppImage from "../images/divergent_sketch.png";
import AgImage from "../images/AG_logo_sketch.png";
import MgImage from "../images/MG_logo_sketch.png";
import GokuImage from "../images/Dragon_Ball_Z_sketch.png";
import FemmeImage from "../images/Femme_system_sketch.png";
import PopArtImage from "../images/Pop_art_sketch_photo.png";

const ProjectPage = ({ props }) => {
  const [addClass, setAddClass] = useState("");

  console.log(props.path);

  useEffect(() => {
    setAddClass("loaded");
  }, []);

  const renderImage = () => {
    if (props.path === "/projects/ag-logo-design") {
      return AgImage;
    }
    if (props.path === "/projects/femme-illustration") {
      return FemmeImage;
    }
    if (props.path === "/projects/divergent-ux-app") {
      return AppImage;
    }
    if (props.path === "/projects/mg-visual-identity") {
      return MgImage;
    }
    if (props.path === "/projects/pop-art-illustration") {
      return PopArtImage;
    }
    if (props.path === "/projects/manga-illustration") {
      return GokuImage;
    }
  };

  const smallImageClass = () => {
    if (
      props.path === "/projects/divergent-ux-app" ||
      props.path === "/projects/pop-art-illustration"
    ) {
      return "small-image";
    }
  };

  const renderColourClass = () => {
    if (props.path === "/projects/ag-logo-design") {
      return "#53DBEB";
    }
    if (props.path === "/projects/femme-illustration") {
      return "#8318BC";
    }
    if (props.path === "/projects/divergent-ux-app") {
      return "#3D405B";
    }
    if (props.path === "/projects/mg-visual-identity") {
      return "#F4737C";
    }
    if (props.path === "/projects/pop-art-illustration") {
      return "#E6B33C";
    }
    if (props.path === "/projects/manga-illustration") {
      return "#DC4206";
    }
  };

  return (
    <Layout>
      <div className="project-page-container">
        <ProjectsWrap className="project-wrap">
          <div className={`content-container ${addClass}`}>
            <Link to="/" className="back-button">
              {`< Back to Work`}
            </Link>
            <h1>{props.pageContext.title}</h1>

            <img src={props.pageContext.image} alt={props.pageContext.title} />
            <Container className="work-container">
              <Row>
                <Col md={10}>
                  <p>{props.pageContext.description}</p>
                  <p>{props.pageContext.description2}</p>
                  <p>{props.pageContext.description3}</p>
                </Col>
                <Col md={2}>
                  <div className="skills-container">
                    <ul>
                      <h3 style={{ background: `${renderColourClass()}` }}>
                        Tools
                      </h3>
                      {props.pageContext.skills.map((item, i) => {
                        return <li key={`${i}-technologies`}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </Col>
              </Row>
              <img
                src={renderImage()}
                alt="image"
                className={smallImageClass()}
              />
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

    &.small-image {
      max-width: 660px;
      margin: auto;
      display: block;
    }
  }

  .back-button {
    font-weight: 600;
    color: #444444;
    margin-left: 50px;
    font-size: 18px;
    text-decoration: none;
  }

  .skills-container {
    ul {
      padding-left: 15px;

      li {
        padding-bottom: 10px;
      }
    }
  }

  .work-container {
    margin-bottom: 160px;

    p {
      padding: 0 60px;
    }

    img {
      margin-top: 60px;
    }
  }

  h3 {
    padding: 5px 40px;
    border-radius: 3px;
    color: white;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 15px;
    position: relative;
    left: -17px;
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
                description2
                description3
                id
                modalURL
                skills
                slug
                title
                prevImage {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={({ allDataJson }) => <ProjectPage props={props} />}
  />
);
