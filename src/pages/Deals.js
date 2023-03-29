import React from "react";
import styled from "styled-components";
import { DealsList, SortDeals, PageHero } from "../components";

const Deals = () => {
  return (
    <main>
      <PageHero title="deals" />
      <Wrapper className="page">
        <h1>50% OFF ON ALL PRODUCTS HERE!</h1>
        <div className="section-center products">
          <div>
            <SortDeals />
            <DealsList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  h1 {
    margin: 5rem 0rem;
    text-align: center;
  }
`;

export default Deals;
