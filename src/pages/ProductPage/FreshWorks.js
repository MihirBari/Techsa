import React from 'react'
import projImg1 from "../../assets/img//headerLogoLight.webp";
import { Link } from 'react-router-dom';


export const FreshWorks = () => {
  return (
    <>
    <h2 style={{ textAlign: "center",marginTop:"50px"  }}>FRESHWORKS</h2>
    <div className='product-Solar'>
        <div>
        <img src={projImg1} alt='FreshWorks' />
        </div>
        <div>
        <p>Freshworks makes it fast and easy for businesses to delight their customers and employees. 
          We go the extra mile to meet your needs and proactively work with you to achieve the results 
          you want. Your success is our success.</p>
             <Link to='/FreshWorks'>
             <button >Read More</button>
             </Link>
        </div>
    </div>
    </>
  )
}
