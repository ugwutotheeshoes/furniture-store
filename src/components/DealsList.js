import React from "react";
import { useFilterContext } from "../context/FilterContext";
import ShippingGrid from "./ShippingGrid";
import ShippingList from "./ShippingList";

const DealsList = () => {
    const { filtered_products: products, grid_view } = useFilterContext();

    if (products.length < 1) {
      return (
        <h5 style={{ textTransform: "none" }}>
          Sorry, no products matched your search..
        </h5>
      );
    }
    if (grid_view === false) {
      return <ShippingList products={products}></ShippingList>;
    }
    return <ShippingGrid products={products}></ShippingGrid>;
}

export default DealsList