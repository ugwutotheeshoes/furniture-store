import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <HomeContainer>
        <h1>Homepage</h1>
        <Link to="/about" className="btn">go back to about</Link>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
margin-bottom: 50rem;
.btn{
    background-color: var(--clr-primary-6);
    color: var(--clr-grey-1);
  }
`

export default Homepage