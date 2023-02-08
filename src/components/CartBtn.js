import React from "react";
// import { FaShoppingBag, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/ProductContext";
// import { useCartContext } from "../context/CartContext";
// import { useUserContext } from "../context/UserContext";

const CartBtn = () => {
  const { closeMiniBar } = useProductsContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeMiniBar}>
        <span className="cart-container">
          <AiOutlineShopping />
          <span className="cart-value">60</span>
        </span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: grid; */
  display: flex;
  justify-content: flex-end;
  /* grid-template-columns: 1fr 1fr; */
  align-items: center;
  width: 125px;

  .cart-btn {
    letter-spacing: var(--spacing);
    color: var(--clr-primary-5);
    font-size: 1.9rem;
    margin-bottom: 0.45rem;
  }

  .cart-container {
    position: relative;
  }

  .cart-value {
    position: absolute;
    top: 34%;
    right: 25%;
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--clr-primary-5);
    border: none;
  }

  @media (min-width: 800px) {
    .cart-btn {
      margin-top: 0.8rem;
      font-size: 2.3rem;
    }

    .cart-value {
      position: absolute;
      top: 34%;
      right: 27%;
      font-size: 0.67rem;
      font-weight: 700;
      color: var(--clr-primary-5);
      border: none;
    }
  }
`;
export default CartBtn;
