import React from "react";
import styled from "styled-components";
import { GrSolaris } from "react-icons/gr";

const Logo = () => {
  return (
    <Wrapper>
      <div className="logo">
        <h3>Sevanis</h3>
        <GrSolaris className="logo-icon" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-top: 0.5rem; */
    color: var(--clr-primary-5);
  }

  .logo h3 {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }

  .logo-icon {
    position: absolute;
    top: -9%;
    right: 38.9%;
    font-size: 2.6rem;
    color: var(--clr-primary-5);
    border: none;
  }

  @media (max-width: 630px) {
    .logo-icon {
      position: absolute;
      top: -50%;
      right: 38.9%;
      font-size: 2.6rem;
      color: var(--clr-primary-5);
      border: none;
    }

    .logo h3{
      line-height: 1.6;
    }
  }

  @media (min-width: 830px) {
    .logo {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.5rem;
      color: var(--clr-primary-5);
    }

    .logo h3{
      line-height: 0.5;
    }

    .logo-icon {
      position: absolute;
      top: -55%;
      right: 38%;
      font-size: 3.2rem;
      color: var(--clr-primary-5);
      border: none;
    }
  }
`;

export default Logo;
