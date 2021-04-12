import React from "react";
import { Container } from "react-grid-system";
import { StaticQuery, graphql, Link } from "gatsby";
import Slider from "react-slick";
import quoteIcon from "../images/icons/left-quotes-sign.svg";

const Reviews = ({ reviews }) => {
  return (
    <Container className="reviews-wrap">
      <h1>LinkedIn recommendations</h1>
      <SlickSlider reviews={reviews} />
      {/* <h1>Communication is the key in every successful project.</h1>
            <p>Don't hesitate to get in touch if you have an idea in mind, a project that needs some help or simply some bugs to fix. I'm currently available for freelance, contract work, or full-time permament position.</p> */}
      <div className="cta-container">
        <Link to="/projects" className="view-projects">
          View my Work
        </Link>
        <Link to="/contact" className="view-projects">
          Get in touch
        </Link>
      </div>
    </Container>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson {
          nodes {
            reviews {
              description
              id
              name
              title
            }
          }
        }
      }
    `}
    render={({ allDataJson }) => (
      <Reviews reviews={allDataJson.nodes} {...props} />
    )}
  />
);

const SlickSlider = ({ reviews }) => {
  console.log(reviews);

  const settings = {
    navigation: true,
    // dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 70000,
    fadeIn: true,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviewsList = reviews[1].reviews;

  return (
    <div className="slider-wrap">
      <Slider {...settings}>
        {reviewsList.map((review, i) => (
          <div className="slide-wrap" key={review.id}>
            <img src={quoteIcon} alt="Quote Mark" width="40" />
            <p className="review-body">{review.description}</p>
            <p className="review-name">{review.name}</p>
            <p className="review-title">{review.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
