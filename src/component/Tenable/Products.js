import React, { useEffect, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import img1 from './ADSecurity.svg';
import img2 from './ExternalAttack.svg';
import img3 from './Operation.svg';
import img4 from './cloudSecurity.svg';
import img5 from './vulnerablity.svg';
import { Accorion } from './Accorion';

const data = [{
  image: img1,
  title: "Active Directory Security",
  heading:'Secure Active Directory and Prevent Attack Paths',
  description: ` Behind almost every breach headline is an attack on Active Directory (AD) that allows the attacker to elevate privileges and facilitate lateral movement. Tenable enables you to see everything in your complex Active Directory environment, predict what matters and address risks to prevent attack paths before attackers can exploit them.`,
},
{
  image: img2,
  title: "External Attack Surface Management",
  heading:'Discover and Secure Your Entire External Attack Surface',
  description: `Visibility is foundational to cybersecurity, yet few organizations have mastered it. External attack surface management (EASM) maps the entire internet and discovers all of your organization’s domains. Identify and secure previously unknown internet-connected assets to eliminate blind spots.`,
},
{
  image: img3,
  title: " Operational Technology Security",
  heading:'Industrial Control Systems (ICS) Require Industrial Grade Security',
  description: ` Industrial enterprises are preparing for the future, integrating OT and IT more than ever before. Industrial digital transformation increases control, efficiencies, production and safety, but it’s not without risks. Tenable offers complete visibility, unified security and prioritization of threat management to help mitigate risk.`,
},
{
  image: img4,
  title: "Cloud Security",
  heading:'Unified Cloud Native Application Protection Platform (CNAPP)',
  description: `Rapid cloud adoption has given rise to complex, multi-cloud environments. With Tenable Cloud Security you can easily ramp up security across all your multi-cloud environments. From full asset discovery and deep risk analysis to runtime threat detection and compliance, you can reduce complexity, minimize your cloud exposure and enforce least privilege at scale.`,
},
{
  image: img5,
  title: " Vulnerability Management",
  heading:'Take a Risk-based Approach to Addressing Exposures',
  description: `Legacy vulnerability management tools are no match for today’s complex IT landscape. Risk-based vulnerability management takes the guesswork out of which vulnerabilities you should tackle first. Gain clear answers so you can avoid wading through a never-ending vulnerability backlog.`,
},
]

export const Products = () => {
  const [activeKey, setActiveKey] = useState('first'); 
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className="project" id="project">
      <h1 className="heading" style={{ textAlign: 'center',color:'red' }}>
        Featured Solutions
      </h1>
      {isWideScreen ? (
      <Tab.Container id="projects-tabs" activeKey={activeKey} onSelect={handleSelect}>
        <div className="d-flex" style={{ width: '100%', marginTop:'59px' }}>
          <Nav
            variant="pills"
            className="flex-column align-items-center product-width"
            id="pills-tab"
            
          >
            <Nav.Item>
              <Nav.Link eventKey="first">
                <img style={{ height: '25px', width: '25px' }} src={img1} alt="Your SVG" />
                Active Directory Security
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                <img style={{ height: '25px', width: '25px' }} src={img2} alt="Your SVG" />
                External Attack Surface Management
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">
                <img style={{ height: '25px', width: '25px' }} src={img3} alt="Your SVG" />
                Operational Technology Security
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="forth">
                <img style={{ height: '25px', width: '25px' }} src={img4} alt="Your SVG" />
                Cloud Security
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">
                <img style={{ height: '25px', width: '25px' }} src={img5} alt="Your SVG" />
                Vulnerability Management
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="ml-3" style={{ width: '60%', border: '1px solid #ddd', padding: '20px', marginBottom: '15px',backgroundColor:'lightgreen' }}>
            {[
              {
                eventKey: 'first',
                title: 'Secure Active Directory and Prevent Attack Paths',
                content:
                  'Behind almost every breach headline is an attack on Active Directory (AD) that allows the attacker to elevate privileges and facilitate lateral movement. Tenable enables you to see everything in your complex Active Directory environment, predict what matters and address risks to prevent attack paths before attackers can exploit them.',
              },
              {
                eventKey: 'second',
                title: 'Discover and Secure Your Entire External Attack Surface',
                content:
                  'Visibility is foundational to cybersecurity, yet few organizations have mastered it. External attack surface management (EASM) maps the entire internet and discovers all of your organization’s domains. Identify and secure previously unknown internet-connected assets to eliminate blind spots.',
              },
              {
                eventKey: 'third',
                title: 'Industrial Control Systems (ICS) Require Industrial Grade Security',
                content:
                  'Industrial enterprises are preparing for the future, integrating OT and IT more than ever before. Industrial digital transformation increases control, efficiencies, production and safety, but it’s not without risks. Tenable offers complete visibility, unified security and prioritization of threat management to help mitigate risk.',
              },
              {
                eventKey: 'forth',
                title: 'Unified Cloud Native Application Protection Platform (CNAPP)',
                content:
                  'Rapid cloud adoption has given rise to complex, multi-cloud environments. With Tenable Cloud Security you can easily ramp up security across all your multi-cloud environments. From full asset discovery and deep risk analysis to runtime threat detection and compliance, you can reduce complexity, minimize your cloud exposure and enforce least privilege at scale.',
              },
              {
                eventKey: 'fifth',
                title: 'Take a Risk-based Approach to Addressing Exposures',
                content:
                  'Legacy vulnerability management tools are no match for today’s complex IT landscape. Risk-based vulnerability management takes the guesswork out of which vulnerabilities you should tackle first. Gain clear answers so you can avoid wading through a never-ending vulnerability backlog.',
              },
            ].map(({ eventKey, title, content }) => (
              <Tab.Pane
                eventKey={eventKey}
                key={eventKey}
              >
                <h3>{title}</h3>
                <p>{content}</p>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </div>
      </Tab.Container>
      ): (
      <div className='module'>
      {data.map(({image, title,heading, description }, index) => (
          <div key={index} >
            <Accorion image={image} heading={heading} title={title} description={description} />
          </div>
        ))}
      </div>
      )}
    </div>
    </>
  );
};
