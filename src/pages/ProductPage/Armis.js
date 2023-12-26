import React from 'react'
import projImg1 from "../../assets/Armis.png";
import { Link } from 'react-router-dom';


export const Armis = () => {
  return (
    <>
    <h2 style={{ textAlign: "center",color:'red'  }}>ARMIS</h2>
    <div className='product-Solar'>
        <div>
        <img src={projImg1} alt='Solarwinds' />
        </div>
        <div>
        <p>SolarWinds stands out as the sole unified platform that seamlessly 
            combines monitoring, observability, and service management. It empowers users with
             comprehensive insight into their IT infrastructure, enabling proactive identification
              of bottlenecks across the entire system.</p>
             <Link to='/Armis'>
             <button >Read More</button>
             </Link>
        </div>
    </div>
    </>
  )
}
