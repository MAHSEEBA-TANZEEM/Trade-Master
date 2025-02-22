import React from 'react'

function Education(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="/images/education.svg" alt="education" style={{width: "70%"}} />

                </div>
                <div className="col-6">
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varisty, the largest online stock market education book in the world <br />covering everything from the basics to advanced trading</p>
                    <a href="" style={{textDecoration: "none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration: "none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Education;