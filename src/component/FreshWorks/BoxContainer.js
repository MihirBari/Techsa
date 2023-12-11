import React, { useEffect } from 'react';
import './BoxContainer.css';
import Aos from "aos";
import "aos/dist/aos.css"

const BoxContainer = () => {
  const boxes = [
    { title: 'ITSM', description: 'Freshworks for IT frees up your agents’ time with AI and automation capabilities that work out of the box. Connectors and APIs integrate seamlessly, so you can address employees’ issues, and keep everyone aligned to your processes.' },
    { title: 'ITOM', description: `Freshworks for IT ensures you’re always up and running with intelligent Alert Management, On-Call Management, and Service Health Monitoring. 
                                   It all adds up to less noise, less downtime, and more service availability.` },
    { title: 'ITAM', description: 'Freshworks for IT ensures you’re always up and running with intelligent Alert Management, On-Call Management, and Service Health Monitoring. It all adds up to less noise, less downtime, and more service availability.' },
    { title: 'Business Teams', description: 'Freshworks for IT streamlines, automates, and simplifies your business processes, eliminating the need for multiple tools while ensuring your whole organization gets a consistent service experience.' },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <>
    <h2 style={{textAlign:"center",marginBottom:"20px"}}> IT Service </h2>
    <div className="boxxx-container">
      {boxes.map((box, index) => (
        <div key={index} className="boxxx" 
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        >
          <h2 style={{textAlign:"center"}}>{box.title}</h2>
          <p style={{textAlign:"center"}}>{box.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default BoxContainer;
