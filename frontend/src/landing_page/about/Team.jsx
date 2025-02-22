import React from 'react'
import { Link } from 'react-router-dom';

function Team(){
    return (
        <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center">
          People
        </h1>
      </div>
      <div className="row text-muted" style={{lineHeight:"1.8",fontSize:"1.1em"}}>
        <div className="col-6 p-3 text-center">
            <img src="/images/nithinKamath.jpg" alt="nithinK" style={{borderRadius:"100%", width:"55%"}} />
            <h4 className='mt-3'>Nithin Kamath</h4>
            <h6 className='mt-3'>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <Link to="/">Homepage</Link> / <Link to="#">TradingQnA</Link> / <Link to="#">Twitter</Link></p>
        </div>
        
      </div>
    </div>
    )
}
export default Team;