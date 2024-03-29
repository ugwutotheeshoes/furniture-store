import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { useProductsContext } from "../context/ProductContext";
import { useUserContext } from "../context/UserContext";
import { FaShoppingCart } from "react-icons/fa";

const MiniNavbar = () => {
  const { myUser } = useUserContext();
  const { isMinibarOpen } = useProductsContext();
  return (
    <MiniContainer>
      <ul className={`${isMinibarOpen ? "fixed-links" : "hide"}`}>
        {links.map((link) => {
          const { id, text, url, icon } = link;
          return (
            <li key={id}>
              <Link to={url}>
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
        {myUser && (
          <li>
            <Link to="/checkout">
              <FaShoppingCart />
              checkout
            </Link>
          </li>
        )}
      </ul>
    </MiniContainer>
  );
};

const MiniContainer = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  /* background: rgba(225, 225, 225, 0.9); */
  background: hsla(0, 0%, 100%, 0.7);

  .fixed-links {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
    li {
      margin: 0 0.5rem;
      padding: 0 1rem;
    }
    a {
      display: flex;
      align-items: center;
      color: var(--clr-primary-5);
      font-size: 1rem;
      text-transform: uppercase;
      padding: 0.5rem;
      letter-spacing: var(--spacing);
    }
  }

  svg {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    margin-right: 0.3rem;
    font-size: 1.1rem;
  }

  .hide {
    display: none;
  }

  @media (min-width: 830px) {
    display: none;
  }

  @media (max-width: 630px) {
    .fixed-links {
      font-size: 1rem;
      /* padding: 0 3rem; */
      width: 100%;

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 1rem;
      }

      a {
        /* display: none; */
        display: flex;
        flex-direction: column;
        padding-top: 0.1rem;
        font-size: 0.6rem;
        font-weight: 700;
      }
    }

    svg {
      background: transparent;
      border: transparent;
      color: var(--clr-primary-5);
      /* margin-bottom: 0.27rem; */
      margin-bottom: 0.05rem;
      font-size: 0.9rem;
    }

    .hide {
      display: none;
    }
  }
`;

export default MiniNavbar;
