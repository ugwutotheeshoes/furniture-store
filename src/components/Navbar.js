import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartBtn from "./CartBtn";
import Logo from "./Logo";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
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
            {myUser && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </ul>
          {/* make navbar buttons bigger on phone screen  */}
          <div className="foo">
            <CartBtn />
            {myUser ? (
              <button
                type="button"
                className="auth-btn out"
                onClick={() => {
                  // clearCart();
                  // localStorage.removeItem("user");
                  logout({
                    returnTo: window.location.origin,
                  });
                }}
              >
                <AiOutlineUserDelete />
              </button>
            ) : (
              <button
                type="button"
                className="auth-btn"
                onClick={loginWithRedirect}
              >
                <AiOutlineUserAdd />
              </button>
            )}
          </div>
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

  .auth-btn {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    margin-left: 1.1rem;
    display: grid;
    /* margin-bottom: 0.36rem; */
    cursor: pointer;
    svg {
      border: 2px solid red;
      font-size: 1.9rem;
      /* font-size: 1.4rem; */
      border-radius: 50%;
    }
  }

  .foo {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .nav-links {
    display: none;
  }

  .out {
    svg {
      border: 2px solid lightseagreen;
    }
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

  @media (max-width: 800px) {
    .auth-btn {
      margin-bottom: 6px;
      svg {
        font-size: 1.8rem;
      }
    }
  }
`;

export default Navbar;
