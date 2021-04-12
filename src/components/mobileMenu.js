import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "gatsby";
import styled from "styled-components";

const MobileMenu = ({ menuLinks }) => (
  <MobileMenuContainer>
    <Menu pageWrapId={"header-wrap"}>
      <div className="nav-wrap">
        <ul>
          {menuLinks.map((link) => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}
            >
              <Link
                activeClassName="active"
                className="menu-item"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Menu>
  </MobileMenuContainer>
);

const MobileMenuContainer = styled.div`
  .bm-item {
    display: inline-block;

    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }

  /* Change color on hover */
  .bm-item:hover {
    color: white;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  .bm-item-list,
  ul,
  .nav-wrap,
  a:focus {
    outline: none;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    &:focus {
      border: none;
      border-color: transparent;
      outline: none;
    }
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  .bm-burger-button {
    left: initial;
    right: 36px;
    top: 15px;
    position: fixed;
    width: 30px;
    height: 25px;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .bm-item-list {
    height: auto !important;

    ul {
      padding-left: 0;
      li {
        &:nth-child(5) {
          display: none;
        }
        a {
          color: white;
        }
      }
    }
  }
`;

export default MobileMenu;
