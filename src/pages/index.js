import React, { useRef, useEffect, useState } from "react";
import Layout from "../components/layout";
import Services from "../components/services";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import "video-react/dist/video-react.css";
import ProjectsList from "../components/ProjectsList";

const IndexPage = (props) => {
  return (
    <div>
      <Layout>
        <SEO title="Rose Gracia | Graphic Designer" />
        <ProjectsList />
      </Layout>
    </div>
  );
};

export default IndexPage;
