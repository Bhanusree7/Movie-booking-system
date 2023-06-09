import React from 'react'
import '../component/Premium.css'
import { Link } from 'react-router-dom'
import img9 from '../assets/pathaan.jpg'
import img10 from '../assets/topgun.jpg'
import img11 from '../assets/ps1.jpg'

const Premium = () => {
  return (
    
    <section className='over'>
    <div className='inner'>
     <h2>Premium</h2>
     <h4>Book Multiple Movie Tickets at a time!</h4>
    </div>
    <div>
    <div className="pro-container">
                <div className="pro">
                    <img src={img9} alt="product1"/>
                    <div className="des">
                        {/* <span>brand</span> */}
                        <h4>Pathaan</h4>
                        <div className="star">
                            {/* <p>⭐⭐⭐⭐⭐</p> */}
                            <p>Hindi/Tamil/Telugu</p>
                            <p>Drama/Family</p>
                        </div>
                        <button type="button" className="btn btn-outline-warning"><Link to="/PremiumPage">Book Now</Link></button>
                    </div>
                    {/* <a href="/">🛒</a> */}
                </div>
              </div>
            
    </div>
    </section>
   
  )
}

export default Premium


// import React from 'react';
// import './ok.css'
// const Premium = () => {
//   return (
//     <div className="section-container">
//       <div className="grid-container">
//         <div className="grid-item">Grid Item 1</div>
//         <div className="grid-item">Grid Item 2</div>
//         <div className="grid-item">Grid Item 3</div>
//         <div className="grid-item">Grid Item 4</div>
//       </div>
//     </div>
//   );
// };

// export default Premium;
