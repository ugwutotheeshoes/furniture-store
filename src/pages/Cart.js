import React from "react";
import { useCartContext } from "../context/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <CartContainer className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </CartContainer>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <CartContainer className="page">
        <CartContent />
      </CartContainer>
    </main>
  );
};

const CartContainer = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default Cart;
