import React from 'react';
import './BoxContainer.css';

const CRM = () => {
  const boxes = [
    { title: 'Freshsales', description: 'Freshsales leverages customer data in ways that help you personalize engagement, shorten the sales cycle, and focus on the leads most likely to sign on the dotted line. All automated, and powered by brilliant AI-driven insights.' },
    { title: 'Freshmarketer', description: `Freshmarketer is a multichannel, conversational CRM that makes it easy to get a 360° view of your customer, and build personalized, contextual experiences that turn “that’s interesting” into “that’s so me” effectively, predictably, and repeatedly.` },
    { title: 'Freshdesk', description: 'Freshdesk simplifies every customer service experience, helping you solve customer inquiries faster and provide highly personalized service. Intelligent automation and workflows eliminate low-value tasks.' },
    { title: 'Freshchat', description: 'Freshchat unifies all your customer conversations in one unified inbox and helps deliver self-service through no-code easy-to-build chatbots on your website, in-app, and across channels (email, WhatsApp, SMS, and more).' },
  ];

  return (
    <>
    <h2 style={{textAlign:"center",margin:"20px"}}> CRM </h2>
    <div className="boxxx-container">
      {boxes.map((box, index) => (
        <div key={index} className="boxxx">
          <h2 style={{textAlign:"center"}}>{box.title}</h2>
          <p style={{textAlign:"center"}}>{box.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default CRM;
