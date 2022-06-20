import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartBtn from "./CartBtn";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <Logo />
          </Link>

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
          {/* <button type="button" className="nav-toggle">
            <FaBars />
          </button> */}
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
  background: var(--clr-white);

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

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    margin-bottom: 0.36rem;

    cursor: pointer;
    svg {
      font-size: 1.4rem;
    }
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 830px) {

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        padding: 0 1rem;
      }
      a {
        color: var(--clr-primary-5);
        font-size: 1rem;
        text-transform: uppercase;
        padding: 0.5rem;
        letter-spacing: var(--spacing);
        &:hover {
          transition: var(--transition);
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
