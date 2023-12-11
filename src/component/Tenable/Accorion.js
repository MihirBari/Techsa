import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Accorion = ({ image, title,heading, description }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <img src={image} alt={title} style={{ width: '50px', maxWidth: '200px', marginRight: '20px' }} />
          <Typography sx={{ color: 'text.secondary' }}> {title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h3 style={{ textAlign:'center'}} >{heading}</h3>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
