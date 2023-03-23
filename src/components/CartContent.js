import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    border-radius: var(--radius);
    border-color: transparent;
  }

  .link-btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-7);
  }
  .clear-btn {
    background: var(--clr-black);
    color: var(--clr-white);
  }
  .clear-btn:hover {
    color: var(--clr-black);
    background: var(--clr-grey-9);
  }
`;

export default CartContent;
