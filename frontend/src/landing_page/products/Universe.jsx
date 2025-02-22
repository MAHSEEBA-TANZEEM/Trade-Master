import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="text-center mt-5">
          <h1>The Zerodha Universe</h1>
          <p className="p-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/images/streakLogo.png"
            style={{ width: "40%", height: "50%" }}
          />
          <p className="text-small text-muted">Algo and startegy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/images/sensibullLogo.svg"
            style={{ width: "40%", height: "50%" }}
          />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/zerodhaFundhouse.png"
          style={{ width: "60%", height: "50%" }}
           />
          <p className="text-small text-muted p-2">&nbsp;&nbsp;&nbsp;&nbsp;Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/images/goldenpiLogo.png"
            style={{ width: "40%", height: "50%" }}
          />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/images/dittoLogo.png"
            style={{ width: "40%", height: "40%" }}
          />
          <p className="text-small text-muted mt-2">&nbsp;&nbsp;&nbsp;&nbsp;Insurance</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width: "20%", margin: "0 auto"}}>Signup for free</button>
      </div>
    </div>
  );
}

export default Universe;
