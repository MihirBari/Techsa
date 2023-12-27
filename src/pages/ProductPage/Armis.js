import React from 'react'
import projImg1 from "../../assets/Armis.png";
import { Link } from 'react-router-dom';


export const Armis = () => {
  return (
    <>
    <h2 style={{ textAlign: "center"  }}>ARMIS</h2>
    <div className='product-Solar'>
        <div>
        <img src={projImg1} alt='Solarwinds' />
        </div>
        <div>
        <p> Armis, the asset intelligence cybersecurity company, protects the entire attack surface 
            and manages the organization’s cyber risk exposure in real time. In a rapidly evolving, 
            perimeter-less world, Armis ensures that organizations continuously see, protect and manage
            all critical assets. Armis secures and helps to keep critical infrastructure, economies and society 
            stay safe and secure 24/7.</p>
             <Link to='/Armis'>
             <button >Read More</button>
             </Link>
        </div>
    </div>
    </>
  )
}
