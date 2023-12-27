import React from 'react'
import img1 from "../../assets/Armis.png"

export const Summary = () => {
  return (
    <div className='arm'>
        <div>
            <img src={img1} alt='' />
        </div>
        <div>
            <p>
            Armis, the asset intelligence cybersecurity company, protects the entire attack surface 
            and manages the organization’s cyber risk exposure in real time. In a rapidly evolving, 
            perimeter-less world, Armis ensures that organizations continuously see, protect and manage
            all critical assets. Armis secures and helps to keep critical infrastructure, economies and society 
            stay safe and secure 24/7.
            </p>
        </div>
    </div>
  )
}
