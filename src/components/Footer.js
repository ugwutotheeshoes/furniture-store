import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      {/* <span className="footer-container"> */}
        <h4>&copy;{new Date().getFullYear()} sevanis</h4>
        <h5>Privacy & Cookies | Ts&Cs | Accessibility</h5>
      {/* </span> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  margin-bottom: 5rem;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--fbg);
  color: var(--fc);
  /* text-align: center; */

  h4 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.6rem;
  }

  h5{
    font-weight: 500;
    font-size: 0.6rem;
    cursor: pointer;
  }
  @media (min-width: 800px) {
    padding: 2rem 2.5rem;
    margin-bottom: 0;

    h4 {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 0.8rem;
  }

  h5{
    font-weight: 200;
    font-size: 0.8rem;
    cursor: pointer;
  }
  }
`;

export default Footer;
