import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="/images/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1 className="mt-5 mb-4">Invest in everything</h1>
        <h4 className="text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more
        </h4>
        <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
