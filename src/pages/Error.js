import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3> sorry, the page you tried doesn't exist.</h3>
        <Link to="/" className="btn">go back to homepage</Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  color: var(--clr-grey-1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; 
  text-transform: uppercase;
  height: 100vh;
  h1 {
    font-size: 10rem;
    line-height: 1;
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: 2rem;
    line-height: 1;
  }
  .btn{
    background-color: var(--clr-primary-6);
    color: var(--clr-grey-1);
  }
  @media (max-width: 830px) {
    h1{
      font-size: 7rem;
      /* margin-bottom: 2rem; */
      line-height: 1;
    }
    h3{
      font-size: 1rem;
      line-height: 1;
    }
  }
`;

export default Error;
