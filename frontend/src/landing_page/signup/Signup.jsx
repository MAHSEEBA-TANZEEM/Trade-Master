import React, { useState } from "react";
import OpenAccount from "../OpenAccount";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your signup logic here
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful signup
        console.log("Signup successful", data);
      } else {
        // Handle signup error
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mt-5 mb-3 text-center">
        Open a free demat and trading account online
      </h1>
      <h5 className="text-center text-muted mb-5">
        Start investing brokerage free and join a community of 1.5+ crore
        investors and traders
      </h5>
      <h2 className="text-center mt-5">Signup now</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-5 mt-5"
        style={{ maxWidth: "400px" }}
      >
        <div className="form-group mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>{" "}
        <br />
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="text-center">
          <button type="submit" className="p-2 btn btn-primary fs-5 mt-3 mb-5"  style={{ width: "20%", margin: "0 auto" }}>
            Signup
          </button>
        </div>
      </form>
      <div className="mt-5">
    <h2 className="mt-5 mb-5 text-center p-3">
        Investment options with Zerodha demat account
    </h2>
    <div className="row between v-align mt-5">
        <div className="col-6 d-flex align-items-center p-3">
            <img
                src="/images/stocks-acop.svg"
                alt="stocks-acop"
                style={{ width: "10%", marginRight: "10px" }}
            />
            <div>
                <h3>Stocks</h3>
                <p>Invest in all exchange-listed securities</p>
            </div>
        </div>
        
        <div className="col-6 d-flex align-items-center p-3">
            <img
                src="/images/mf-acop.svg"
                alt="mf-acop"
                style={{ width: "10%", marginRight: "10px" }}
            />
            <div>
                <h3>Mutual funds</h3>
                <p>Invest in commission-free direct mutual funds</p>
            </div>
        </div>
    </div>
    <div className="row between v-align">
        <div className="col-6 d-flex align-items-center p-3">
            <img
                src="/images/ipo-acop.svg"
                alt="ipo-acop"
                style={{ width: "10%", marginRight: "10px" }}
            />
            <div>
                <h3>IPO</h3>
                <p>Apply to the latest IPOs instantly via UPI</p>
            </div>
        </div>

        <div className="col-6 d-flex align-items-center p-3">
            <img
                src="/images/fo-acop.svg"
                alt="fo-acop"
                style={{ width: "10%", marginRight: "10px" }}
            />
            <div>
                <h3>Futures & options</h3>
                <p>Hedge and mitigate market risk through simplified F&O trading</p>
            </div>
        </div>
    </div>
    <div className="text-center mt-5">
        <button
            className="p-2 btn btn-primary fs-5 mt-3 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
        >
            Explore Investments
        </button>
    </div>
</div>

      <OpenAccount />
    </div>
  );
}

export default Signup;
