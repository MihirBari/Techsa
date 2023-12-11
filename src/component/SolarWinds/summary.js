import React, { useState } from 'react';
import ImageWithText from './ImageWithText';

export const Summary = () => {
  const [displayText, setDisplayText] = useState('');

  const handleImageClick = (clickedAreas) => {
    let newDisplayText = '';

    if (clickedAreas && clickedAreas.includes) {
      if (clickedAreas.includes('Database')) {
        newDisplayText = 'Text for Database Clicked!';
      } else if (clickedAreas.includes('Network')) {
        newDisplayText = 'Text for Network Clicked!';
      } else if (clickedAreas.includes('Infrastructure')) {
        newDisplayText = 'Text for Infrastructure Clicked!';
      } else if (clickedAreas.includes('Application')) {
        newDisplayText = 'Text for Application Clicked!';
      } else if (clickedAreas.includes('Cloud')) {
        newDisplayText = 'Text for Cloud Services Clicked!';
      } else if (clickedAreas.includes('Solarwinds')) {
        newDisplayText = `SolarWinds stands out as the sole unified platform that seamlessly combines monitoring, observability, and service management. It empowers users with comprehensive insight into their IT infrastructure, enabling proactive identification of bottlenecks across the entire system.`;
      } else if (clickedAreas.includes('Automate')) {
        newDisplayText = 'Text for Automate Clicked!';
      } else if (clickedAreas.includes('Observe')) {
        newDisplayText = 'Text for Observe Clicked!';
      } else if (clickedAreas.includes('Remediate')) {
        newDisplayText = 'Text for Remediate Clicked!';
      } else if (clickedAreas.includes('Visualize')) {
        newDisplayText = 'Text for Visualize Clicked!';
      }
    }

    setDisplayText(newDisplayText);
  };

  return (
    <div className='solar'>
      <div>
        <ImageWithText onClick={handleImageClick} />
      </div>
      <div>
        <p>
          {displayText ||
            'SolarWinds stands out as the sole unified platform that seamlessly combines monitoring, observability, and service management. It empowers users with comprehensive insight into their IT infrastructure, enabling proactive identification of bottlenecks across the entire system.'}
        </p>
      </div>
    </div>
  );
};