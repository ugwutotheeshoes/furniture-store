import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const About = () => {
  return (
    <main>
      <Wrapper className="">
        <PageHero title="about" />
        <img
          src="https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1655729137/sevanis/workspace.jpg"
          alt="workspace"
        />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            culpa adipisci quod reiciendis consectetur possimus voluptate
            deserunt iure, repellat commodi cum. Laboriosam tempora architecto
            laborum illo dignissimos rem magnam praesentium.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  /* margin: 0 2rem; */

  img {
    width: 100%;
    display: block;
    height: 500px;
    border-radius: var(--radius);
    object-fit: cover;
    /* margin: 0 0.5rem; */
  }

  p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  article{
    margin: 0 0.5rem;
  }

  @media (max-width: 830px) {
    h2 {
      line-height: 0.25;
    }
    .underline {
      width: 10rem;
    }
    p {
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }

    img {
    width: 100%;
    display: block;
    height: 300px;
    border-radius: var(--radius);
    object-fit: cover;
    /* margin: 0 0.5rem; */
  }
  }

  /* @media (max-width: 630px) {
    h2{
      line-height: 0.25;
    }
    .underline {
      width: 8.8rem;
    }
  } */
`;

export default About;
