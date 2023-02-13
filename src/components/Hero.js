import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Excepteur velit voluptate exercitation voluptate non cupidatat ad
          reprehenderit consequat sunt officia irure. Adipisicing culpa id
          reprehenderit quis reprehenderit incididunt pariatur non qui minim
          proident elit ut commodo. Voluptate ea elit ullamco ex enim cillum
          eiusmod ex.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img
          src="https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1676270465/cup-of-couple.jpg"
          alt="workspace"
          className="main-img"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  h1 {
    line-height: 1;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }

  @media (max-width: 630px) {
    .hero-btn {
      font-size: 0.7rem;
    }
    h1{
        font-size: 2rem; 
    }
    p {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 750px) {
    margin: 0 2rem;
    
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      display: block;
      object-fit: cover;
      border-radius: var(--radius);
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
    }
  }
`;

export default Hero;
