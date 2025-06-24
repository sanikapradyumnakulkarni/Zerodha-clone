import React from 'react'

function Hero() {
    return ( 
          <section className='container-fluid' id="supportHero">
        <div className='p-5' id="supportWrapper">
            <h4>
              Support Portal
            </h4>
            <a href="">Track Tickets</a>
      </div>
      <div className='row p-5 m-3 '>
         <div className='col-6 p-3'>
            <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder='Eg. how do I activate F&O'/><br/>
           <div className="d-flex flex-wrap gap-3">
    <a href="#" className="text-white text-decoration-underline">Track account opening</a>
    <a href="#" className="text-white text-decoration-underline">Track segment activation</a>
    <a href="#" className="text-white text-decoration-underline">Intraday margins</a>
    <a href="#" className="text-white text-decoration-underline">Kite user manual</a>
</div>
         </div>
          <div className='col-6 p-3 '>
          <h1>Featured</h1>
          <ol >
            <li className="p-2"><a href="">Adjustment of F&O contracts of PNB due to dividend </a></li>
             <li className="p-2"> <a href="">Rights Entitlements listing in June 2025</a></li>
          </ol>
          </div>

      </div>
    </section>
     );
}

export default Hero;
