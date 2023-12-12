import React, { useState } from 'react';
import img1 from '../../assets/img/SW_IT.webp';

const ImageWithText = ({ onClick }) => {
  const [clickedArea, setClickedArea] = useState('');

  const handleImageClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    console.log('Clicked at:', offsetX,offsetY);

    // Map clicked coordinates to areas from the image map
    const areas = {
      Database: { coords: [150, 46, 220, 110], name: 'Database' },
      Network: { coords: [29, 96, 91, 160], name: 'Network' },
      Infrastructure: { coords: [103, 142, 170, 218], name: 'Infrastructure' },
      Application: { coords: [190, 200, 247, 268], name: 'Application' },
      Cloud: { coords: [104, 251, 171, 322], name: 'Cloud Services' },
      Solarwinds: { coords: [305, 85, 478, 248], name: 'Solarwinds' },
      Automate: { coords: [323, 23, 401, 47], name: 'Automate' },
      Observe: { coords: [482, 38, 522, 118], name: 'Observe' },
      Remediate: { coords: [492, 201, 537, 296], name: 'Remediate' },
      Visualize: { coords: [360, 299, 432, 322], name: 'Visualize' },
    };

     
    // Check if the clicked coordinates are within any area
    const clickedAreaName = Object.keys(areas).find((area) => {
      const [x1, y1, x2, y2] = areas[area].coords;
      return offsetX >= x1 && offsetX <= x2 && offsetY >= y1 && offsetY <= y2;
    });

    // Update the state with the clicked area
    setClickedArea(clickedAreaName); // Use an empty string if clickedAreaName is undefined
    onClick(clickedAreaName);
    console.log('Clicked Area:', clickedAreaName);
  };

  return (
    <div >
      <img src={img1} alt="" onClick={handleImageClick} className='ImageWithText' />
      <div>{/* You can display additional information or components related to the clicked area here */}</div>
    </div>
  );
};

export default ImageWithText;