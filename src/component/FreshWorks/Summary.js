import React from 'react'
import img1 from "../../assets/img/headerLogoLight.webp"

export const Summary = () => {
  return (
    <div className='big'>
        <div>
            <img src={img1} alt='' />
        </div>
        <div>
            <p>
            Freshworks makes it fast and easy for businesses to delight their 
            customers and employees. We go the extra mile to meet your needs
             and proactively work with you to achieve the results you want. Your success is our success.
            </p>
        </div>
    </div>
  )
}
