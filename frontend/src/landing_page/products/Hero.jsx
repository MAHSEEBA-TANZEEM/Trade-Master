import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5 mb-5">
        <h1 className="mt-5">Zerodha Products</h1>
        <h5 className="p-2 text-muted">Sleek, modern, and intuitive trading platforms</h5>
        <p className="p-2 text-muted mb-5">
          Check out our{" "}
          <a href="#">
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
