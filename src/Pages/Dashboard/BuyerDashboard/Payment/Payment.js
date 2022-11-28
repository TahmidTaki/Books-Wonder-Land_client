import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PKEY);
const Payment = () => {
  const booking = useLoaderData();
  return (
    <div>
      <h3>Payment for {booking.item}</h3>
      <p>Total Payment: MYR {booking.price}</p>
      <div className="w-96 mx-auto mt-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
