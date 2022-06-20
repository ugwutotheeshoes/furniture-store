import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartBtn from "./CartBtn";
import { useProductsContext } from "../context/ProductContext";
import { useUserContext } from "../context/UserContext";
import Logo from "./Logo";

const Sidebar = () => {
  const isOpen = false;
  return (
    <SidebarContainer>
      <aside className={`${isOpen ? "sidebar show-sidebar" : "show-sidebar"}`}>
        <div className="sidebar-header">
          <Logo />
          <button className="close-btn" type="button">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .close-btn {
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-primary-5);
    font-size: 1.9rem;
    margin-bottom: 0.15rem;
  }
  .close-btn:hover {
    color: var(--clr-primary-9);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  .links {
    margin-left: 0.5rem;
  }

  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.5rem 1.5rem;
    color: var(--clr-primary-5);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    /* margin-left: 0.5rem; */
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--fbg);
    color: var(--clr-primary-3);
    border-left: 2px solid var(--clr-primary-7);
  }

  /* .links {
      li {
        margin: 1rem 0.5rem;
      }
      a {
        color: var(--clr-primary-5);
        font-size: 1rem;
        text-transform: uppercase;
        padding: 0.5rem;
        letter-spacing: var(--spacing);
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
          color: var(--clr-primary-2);
        }
      }
    } */
  @media screen and (min-width: 800px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
