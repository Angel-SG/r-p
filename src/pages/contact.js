import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { Container } from "react-grid-system";

const ContactPage = () => {
  const [addClass, setAddClass] = useState("");

  useEffect(() => {
    setAddClass("loaded");
  }, []);

  return (
    <Layout>
      <SEO title="Contact" />

      <div>
        <Container className={`form-wrap content-container ${addClass}`}>
          <Form
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="name">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" required />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" />
            </div>
            <div className="actions">
              <input
                type="submit"
                value="Submit"
                className="view-projects"
                required
              />
            </div>
          </Form>
        </Container>
      </div>
    </Layout>
  );
};

const Form = styled.form`
  width: 100%;
  max-width: 800px;
  margin: 40px auto;

  input,
  textarea {
    width: 100%;

    margin-bottom: 20px;
  }

  input {
    height: 30px;
  }

  textarea {
    height: auto;
  }

  label {
    display: block;
    font-weight: 500;
    padding-bottom: 10px;
  }
`;

export default ContactPage;
