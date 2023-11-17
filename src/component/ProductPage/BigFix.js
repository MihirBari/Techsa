import React from 'react'
import projImg1 from "../../assets/img/136048.png";
import { Link } from 'react-router-dom';


export const BigFix = () => {
  return (
    <>
    <h2 style={{ textAlign: "center", marginTop:'50px' }}>BigFix</h2>
    <div className='product-Big'>
        <div>
        <p>BigFix is the result of IBM's purchase of BigFix, Inc. 
            Enabling it to offer additional security and compliance services. 
            The software provides endpoint and security management in a single 
            solution and enables organizations to see and manage physical and 
            virtual endpoints.</p>
             <Link to='/bigfix'>
             <button >Read More</button>
             </Link>
        </div>
        <div>
        <img src={projImg1} alt='BigFix' />
        </div>
    </div>
    </>
  )
}
