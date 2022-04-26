import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrSolaris } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import CartBtn from "./CartBtn";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <div className="title">
              <h3>Sevanis</h3>
              <GrSolaris className="title-icon" />
            </div>
          </Link>
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
          <CartBtn />
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
    color: var(--clr-primary-5);
  }

  .title h3 {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }

  .title-icon {
    position: absolute;
    top: -9%;
    right: 38.7%;
    font-size: 2.6rem;
    color: var(--clr-primary-5);
    border: none;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 1.4rem;
    }
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 800px) {
    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.5rem;
      color: var(--clr-primary-5);
    }

    .title-icon {
      position: absolute;
      top: -15%;
      right: 38%;
      font-size: 3.2rem;
      color: var(--clr-primary-5);
      border: none;
    }

    .nav-toggle {
      display: none;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-primary-5);
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0.5rem;
        letter-spacing: var(--spacing);
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
  }

  /* @media (min-width: 200px) {
    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.5rem;
      color: var(--clr-primary-5);
    }

    .title h3 {
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      font-size: 2.5rem;
    }

    
  } */
`;

export default Navbar;
