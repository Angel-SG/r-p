import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import developmentImg from '../images/icons/web-programming.svg';
import cmsImg from '../images/icons/database.svg';
import optimizationImg from '../images/icons/optimization.svg';
import browserImg from '../images/icons/browser.svg';
import responsiveImg from '../images/icons/internet.svg'

const Services = () => {
    return(
        <div className="services-wrap">
        
            <Container>
                <h1>What do I do</h1>
                <p>With over four years of experience within the industry, I participated in a wide range of web projects where I had the opportunity to learn, share, improve, and most importantly, deliver an excellent user experience that helped companies and teams to achieve their goals.</p>
                <Row>
                    <Col md={6}>
                        <div className="service-wrap">
                            <img src={developmentImg} alt="Front-end Development" width="100"/>
                            <h2>Front-end Development</h2>
                        </div>
                    </Col>
                        
                    <Col md={6} sm={12}>
                        <div className="service-wrap">
                            <img src={cmsImg} alt="Web Development" width="100"/>
                            <h2>Gatsby sites with Headless CMS</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={responsiveImg} alt="Responsive Design" width="100"/>
                        <div className="service-wrap">
                            <h2>Responsive Design</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={optimizationImg} alt="Site optimization" width="100"/>
                        <div className="service-wrap">
                            <h2>Site Optimization and Accessibility</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={browserImg} alt="Front-end Development" width="100"/>
                        <div className="service-wrap">
                            <h2>Cross-browser compatibility</h2>
                        </div>
                    </Col>
                  
                </Row>
               
            </Container>
        </div>
    )
}

export default Services;