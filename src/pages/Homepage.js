import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FeaturedProducts, Hero, Services, Contact } from "../components";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
      {/* <Link to="/about" className="btn">
        go back to about
      </Link> */}
    </main>
  );
};

const HomeContainer = styled.div`
  /* margin-bottom: 50rem;
  .btn {
    background-color: var(--clr-primary-6);
    color: var(--clr-grey-1);
  } */
`;

export default Homepage;
