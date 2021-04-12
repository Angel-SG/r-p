import React from "react";
import { StaticQuery, graphql } from "gatsby";
import MobileMenu from "../components/mobileMenu";
import Header from "./header";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Montserrat', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    width: 100%;
    height: 100vh;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    background-color: white;
  }

  p,
  li,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  label {
    color: #444444;
  }
`;

class Layout extends React.Component {
  render() {
    const { children, data } = this.props;

    const { ...projectsData } = this.props;

    console.log(projectsData);

    return (
      <React.Fragment>
        <LayoutContainer>
          <Helmet>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <GlobalStyle />
          <MobileMenu menuLinks={data.nodes[0].siteMetadata.menuLinks} />
          <Header
            siteTitle={data.nodes[0].siteMetadata.title}
            menuLinks={data.nodes[0].siteMetadata.menuLinks}
            projectsPage={
              children.props &&
              children.props.className === "project-page-container"
                ? true
                : false
            }
          />

          <div className="layout-wrap">
            <main>{children}</main>
            <footer>
              <span>
                {" "}
                © {new Date().getFullYear()} &nbsp; Rose Gracia Design
              </span>
            </footer>
          </div>
        </LayoutContainer>
      </React.Fragment>
    );
  }
}

const LayoutContainer = styled.div`
  main {
    flex-grow: 1;
  }

  header,
  main,
  footer {
    flex-shrink: 0;
  }

  header {
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    position: sticky;
    top: 0;
    border-bottom: 1px solid lightgray;
    z-index: 10;
    background-color: ghostwhite;
  }

  .layout-wrap {
    min-height: calc(100vh - 53.5px);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    // background: url(../images/texture-5-ghost.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: -5px -5px;

    @media screen and (min-width: 768px) {
      min-height: calc(100vh - 53.5px);
    }
  }

  footer {
    text-align: center;
    padding: 15px 0;

    i {
      color: #28b3ea;
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allSite {
          nodes {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
        allDataJson {
          nodes {
            projects {
              id
              image {
                src {
                  absolutePath
                }
              }
              title
              skills
              modalURL
            }
          }
        }
      }
    `}
    render={({ allSite, allDataJson }) => (
      <Layout data={allSite} projects={allDataJson} {...props} />
    )}
  />
);
