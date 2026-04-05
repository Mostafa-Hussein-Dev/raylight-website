"use client";

import { useState } from "react";

export default function JoinSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="join section">
      <div className="join__container container grid">
        <div className="join__bg grid">
          <div className="join__image">
            <div className="join__blob">
              <img src="/join-lamp.png" alt="join image" className="join__img" />
              <h1 className="join__blob-title">LIGHT</h1>
            </div>
            <div className="join__shadow"></div>
          </div>

          <div className="join__content grid">
            <div className="join__data">
              <h2 className="section__title">Get Started</h2>
              <p className="join__description">
                Do not miss it, join us and get <br />
                interesting discounts with us.
              </p>
            </div>

            <form className="join__form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="join__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="button join__button">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
