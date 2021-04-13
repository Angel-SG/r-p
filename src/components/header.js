import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Container } from "react-grid-system";
import Logo from "../images/RoseGraciaLogo.png";
import styled from "styled-components";
import BgImage from "../images/marbel_effect.png";

const Header = ({ menuLinks, projectsPage }) => {
  console.log(projectsPage);
  return (
    <HeaderContainer>
      <div className="header-wrap" id="header-wrap">
        <div className="nav-wrap">
          <div className="logo" style={{ display: "flex" }}>
            <Link
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              <img width="340" src={Logo} alt="Angel-Sg" />
            </Link>
          </div>
        </div>
        {projectsPage ? null : (
          <nav>
            <ul style={{ display: "flex" }}>
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    activeClassName="active"
                    to={link.link}
                    className={projectsPage ? "active" : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  .nav-wrap {
    width: 100%;
    background-image: url(${BgImage});
    background-size: cover;
    margin-bottom: 30px;

    a {
      text-align: center;
      display: block;
      margin: 60px auto 30px auto;
    }
  }

  nav {
    margin: 50px auto 70px auto;

    ul {
      justify-content: center;
      padding: 0;

      li {
        list-style: none;
        padding: 10px 50px;

        a {
          font-size: 28px;
          color: #444444;
          text-decoration: none;
          border-bottom: 3px solid transparent;

          &.active {
            border-bottom: 3px solid #444444;
          }
        }
      }
    }
  }
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
