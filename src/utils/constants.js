import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import { FaListUl, FaHome, FaTag } from "react-icons/fa";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "products",
    url: "/products",
    icon: <FaListUl />,
  },
  {
    id: 3,
    text: "deals",
    url: "/deals",
    icon: <FaTag />,
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis, iste, nam perspiciatis maxime iure voluptate architecto facilis, pariatur a velit! Veritatis facere aspernatur autem quae excepturi dolores dicta quos.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis, iste, nam perspiciatis maxime iure voluptate architecto facilis, pariatur a velit! Veritatis facere aspernatur autem quae excepturi dolores dicta quos.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis, iste, nam perspiciatis maxime iure voluptate architecto facilis, pariatur a velit! Veritatis facere aspernatur autem quae excepturi dolores dicta quos.",
  },
];

export const products_url = 'https://www.course-api.com/react-store-products';

export const single_product_url = `https://www.course-api.com/react-store-single-product?id=`;