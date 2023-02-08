import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <CartContainer>
      <h1>Cart</h1>
      {/* <Link to="/" className="btn">go back to homepage</Link> */}
      <Link to="/checkout" className="toggle">
        <FaShoppingCart className="icon" />
        <span>checkout</span>
      </Link>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  margin: 50rem 0;
  z-index: 1;

  .toggle {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    margin: 2rem 0;
    bottom: 0;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    background: rgba(255, 255, 255, 0.6);
    z-index: 2;
  }

  .btn{
    background-color: var(--clr-primary-6);
    color: var(--clr-grey-1);
  }

  span {
    color: var(--clr-primary-5);
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 0.5rem;
    letter-spacing: var(--spacing);
  }

  .icon {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    margin-top: 0.20  rem;
    font-size: 1.5rem;
  }
`;

export default Cart;
