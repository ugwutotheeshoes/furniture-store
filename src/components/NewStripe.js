import React from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/CartContext";
import { useUserContext } from "../context/UserContext";
import { formatPrice } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const NewStripe = () => {
    const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  // This is your test secret API key.
  const stripe = require("stripe")(
    "sk_test_51MpIOfAVOcPT1Ra8mxRyYtTakKsgX18slBi2NtVP5vMySVrIOLEYsogI183YgbrW5Mqy0TbHx2QUjHAbCvxvEFKT00yGHqfn5O"
  );
  const express = require("express");
  const app = express();
  app.use(express.static("public"));

  const YOUR_DOMAIN = "http://localhost:3000";

  app.post("/create-checkout-session", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "{{PRICE_ID}}",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/success.html`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });

    res.redirect(303, session.url);
  });

  app.listen(4242, () => console.log("Running on port 4242"));
  return <div>NewStripe</div>;
};

export default NewStripe;
