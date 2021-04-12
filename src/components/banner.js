import React from "react";
import Typing from 'react-typing-animation';
import { Container } from 'react-grid-system';

const Banner = ({ title }) => (
    <div>
        <Container className="intro-text-container">
          <Typing speed={60} delay={200} hideCursor={true}>
            <span><h1 style={{'textAlign': 'left'}}>{title}</h1></span>
          </Typing>
        </Container>
    </div>
  

)

export default Banner;