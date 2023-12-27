import React from 'react'
import img1 from "../../assets/img/136048.png"

export const Summary = () => {
  return (
    <div className='big'>
        <div>
            <img src={img1} alt='' />
        </div>
        <div>
            <p>
            BigFix provides a unified architecture, leveraging AI technology, to effectively manage and
            assure compliance of all servers, desktops, and mobile devices, whether they are in the office, 
            at home, or in the cloud.
            </p>
        </div>
    </div>
  )
}
