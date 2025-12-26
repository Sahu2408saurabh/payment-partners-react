import React from "react";
import "./trust.css";

import nyw from "../assets/New-York-Weekly.webp";
import usinsider from "../assets/US+Insider.webp";
import indianBulletin from "../assets/indian-bulletin1.png";
import dailyhunt from "../assets/Dailyhunt-Logo.png";
import news24 from "../assets/news24.png";
import newsNation from "../assets/news-nation1.png";

import indiatv from "../assets/i tv.png";
import flipboard from "../assets/flipboard1.png";
import republic from "../assets/republic.jpg";
import bs from "../assets/bs.png";

import hindustan from "../assets/hindustan-removebg-preview.png";
import bw from "../assets/bw 2.png";
import et from "../assets/et.png";

const Trust = () => {
  return (
    <section className="trust-section">
      <div className="container-fluid text-center">

        <h2 className="trust-title">Credibility &amp; Trust</h2>

        {/* ROW 1 */}
        <div className="row trust-row first-row">
          {[nyw, usinsider, indianBulletin, dailyhunt, news24, newsNation].map(
            (logo, i) => (
              <div className="col-md-2 logo-box" key={i}>
                <img src={logo} className="trust-logo" alt="media" />
              </div>
            )
          )}
        </div>

        {/* ROW 2 */}
        <div className="row trust-row second-row">
          {[indiatv, flipboard, republic, bs].map((logo, i) => (
            <div className="col-md-3 logo-box" key={i}>
              <img src={logo} className="trust-logo" alt="media" />
            </div>
          ))}
        </div>

        {/* ROW 3 */}
        <div className="row trust-row third-row">
          {[hindustan, bw, et].map((logo, i) => (
            <div className="col-md-4 logo-box" key={i}>
              <img src={logo} className="trust-logo" alt="media" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trust;
