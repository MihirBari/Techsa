import React from 'react'
import projImg1 from "../../assets/img/SolarWindsLogo-featured-image.jpg";
import { Link } from 'react-router-dom';

export const Solarwinds = () => {
  return (
    <>  
    <h2 style={{ textAlign: "center"  }}>SOLARWINDS</h2>
    <div className='product-Solar'>
        <div>
        <img src={projImg1} alt='Solarwinds' />
        </div>
        <div>
        <p>SolarWinds stands out as the sole unified platform that seamlessly 
            combines monitoring, observability, and service management. It empowers users with
             comprehensive insight into their IT infrastructure, enabling proactive identification
              of bottlenecks across the entire system.</p>
             <Link to='/SolarWinds'>
             <button >Read More</button>
             </Link>
        </div>
    </div>
    </>
  )
}
