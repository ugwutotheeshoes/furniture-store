import React from "react";
// import { FaShoppingBag, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/ProductContext";
import { useCartContext } from "../context/CartContext";
// import { useUserContext } from "../context/UserContext";

const CartBtn = () => {
  const { closeMiniBar } = useProductsContext();
  const { total_items } = useCartContext();
  // const [number, setNumber] = useState(total_items)
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeMiniBar}>
        <span className="cart-container">
          <AiOutlineShopping />
          <span className={total_items < 10 ? "digit" :"cart-value"}>{total_items}</span>
        </span>
      </Link>
      {/* do an if or else for styling the cart button so when its a single digit value shift the postion and change the 
      styling classname and vice versa */}
    </Wrapper>
  );
};

const Wrapper = styled.div`

  .cart-btn {
    letter-spacing: var(--spacing);
    color: var(--clr-primary-5);
    font-size: 2.4rem;
    margin-bottom: 0.45rem;
  }

  .cart-container {
    position: relative;
  }

  .cart-value {
    position: absolute;
    top: 31%;
    right: 23.5%;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--clr-primary-5);
    border: none;
  }
  .digit {
    position: absolute;
    top: 31%;
    right: 34.5%;
    font-size: 0.8rem;
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
