import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div>
        <h3>
          <Link to="/">Home</Link>{product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  padding-left: 3rem;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }

  a:hover {
    color: var(--clr-primary-1);
  }

  h3 {
    text-transform: uppercase;
    font-size: 1.1rem;
  }

  @media (max-width: 830px) {
    min-height: 15vh;
  }
`;

export default PageHero;
