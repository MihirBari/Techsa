import React from 'react'
import img1 from "../../assets/inventory/bigfix-on-cloud.png"

export const Summary = () => {
  return (
    <div className='big'>
        <div>
            <img src={img1} alt='' />
        </div>
        <div>
            <p>
            BigFix is the result of IBM's purchase of BigFix, Inc. Enabling it to offer additional security 
            and compliance services. The software provides endpoint and security management
             in a single solution and enables organizations to see and manage physical and virtual endpoints.
            </p>
        </div>
    </div>
  )
}
