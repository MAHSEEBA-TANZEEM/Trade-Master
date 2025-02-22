import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{ textDecoration: "underline" }}>
          Track Tickets
        </a>
      </div>
      <div className="row px-5">
        <div className="col-6 p-4">
          <h1 className="fs-3 lh-base mb-2">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected"
          />{" "}
          <br /> <br />
          <a href="" style={{ textDecoration: "underline", fontSize: "18px" }}>
            Track account opening
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="" style={{ textDecoration: "underline", fontSize: "18px" }}>
            Track segment activation
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="" style={{ textDecoration: "underline", fontSize: "18px" }}>
            Intraday margins
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="" style={{ textDecoration: "underline", fontSize: "18px" }}>
            Kite user manual
          </a>
        </div>

        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1><br />
          <ol>
            <li>
              <a
                href=""
                style={{ textDecoration: "underline", fontSize: "18px" }}
              >
                Current Takeovers and Delisting- January 2025
              </a>
            </li><br />
            <li>
              <a
                href=""
                style={{ textDecoration: "underline", fontSize: "18px" }}
              >
                Latest Intraday leverages- MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
