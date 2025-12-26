import React from "react";
import "./payment-partners.css";

import paypal from "../assets/PayPal.svg.png";
import stripe from "../assets/stripe-removebg-preview.png";
import payu from "../assets/pay_u-removebg-preview.png";
import cashfree from "../assets/cashfree payment.png";
import phonepe from "../assets/PhonePe_Logo.svg.webp";
import cred from "../assets/CRED-LOGO2.png";
import amazon from "../assets/Amazon_logo.svg.png";
import razorpay from "../assets/Razorpay_logo.svg";
import bhim from "../assets/BHIM_Preview.png";

const PaymentPartners = () => {
  return (
    <section className="payment-partner">
      <h2>Our Payment Partner</h2>

      <div className="logo-container">
        <div className="logo-item"><img src={paypal} alt="PayPal" /></div>
        <div className="logo-item"><img src={stripe} alt="Stripe" /></div>
        <div className="logo-item"><img src={payu} alt="PayU" /></div>
        <div className="logo-item"><img src={cashfree} alt="Cashfree" /></div>

        <div className="logo-item"><img src={phonepe} alt="PhonePe" /></div>
        <div className="logo-item"><img src={cred} alt="CRED" /></div>
        <div className="logo-item"><img src={amazon} alt="Amazon" /></div>
        <div className="logo-item"><img src={razorpay} alt="Razorpay" /></div>
        <div className="logo-item"><img src={bhim} alt="BHIM" /></div>
      </div>
    </section>
  );
};

export default PaymentPartners;
