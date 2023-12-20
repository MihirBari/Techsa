import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutCard } from "./AboutCard";
import projImg1 from "../../assets/img/RaviKhanchandani.jpg";
import projImg2 from "../../assets/img/SanjivSachdev.jpg";

import { Testimonial } from "./Testimonial";
import { Awards } from "./Awards";

export const About = () => {
  const projects = [
    {
      imgUrl: projImg1,
      caption: "Ravi Khanchandani",
      link: "https://www.linkedin.com/in/ravikhanchandani",
      description: `Over 3 decades of rich experience in the IT industry, including 13+ years of running Techsa. Past experience comes from various profiles and positions held ranging from Support Engineer, Network Engineer, Systems Integration, Regional SI Manager, Technical Manager, Sr. Systems Engineer, Principal Consultant, Business Development Manager - Security, Regional Systems Engineering Manager, Country Manager - Systems Engineering and now an Entrepreneur role. All roles have provided me diverse skills from managing customers, partners, technology & managing diverse teams.

      Rich exposure in different technical domains - Networking, Content Switching, Security, Unified Communications, IT Infrastructure Management, Endpoint Management, Data Center Architectures and more.  Good communication & presentation skills, a head for Sales & business, creative in approach towards various issues & excellent man-management.`,
    },
    {
      imgUrl: projImg2,
      caption: "Sanjiv Sachdev",
      link: "https://www.linkedin.com/in/sanjivsachdev",
      description: ` Sanjiv holds a Bachelor's Degree in Engineering with specialisation in Electronics. Sanjiv is a passionate and adventurous technologist with core strengths in result-oriented Business Development & Growth Management. Sanjiv brings with him close to 3 decades of experience in the Information Technology Industry. 
 
Based out of India, Sanjiv has worked extensively with global clients in North America and EMEA. Sanjiv has built a niche for Techsa Services that is known to be a specialist in the domain and solutions offered by them.  
 
Prior to founding and managing the Sales & General Administration of Techsa Services Pvt Ltd for close to 14 years, Sanjiv has held various leadership profiles in Account Management, Team & Territory Management in companies like Wipro Infotech, Nortel Networks and Cisco Systems. Sanjiv is an animal lover with huge empathy for humanity & sensitivity of giving back to the society. Sanjiv also specialises in Commercial Innovation, P&L Management and supporting Start-ups. Sanjiv believes in building high performance teams and carries the philosophy of ‘Work Hard; Play Hard’ at Techsa Services.
`,
    },
  ];

  return (
    <div className="about">
      <section>
        <Container>
          <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
            Brief About Us
          </h2>
          <p style={{ textAlign: "center", marginBottom: "25px" }}>
            We team up with industry-leading technology partners to deliver
            innovative solutions. Our strategic alliances with these industry
            leaders empower us to stay ahead of the curve and provide our
            customers with top-quality products and services.
          </p>
          <div className="rectangle-container">
            <div className="rectangle"></div>
            <div className="content">
              <Col style={{ textAlign: "center" }}>
                <h2>Leadership Team</h2>
                <br />
                <Row>
                  <div className="Cardd">
                    {projects.map((contents) => (
                      <AboutCard
                        key={contents.id}
                        image={contents.imgUrl}
                        name={contents.caption}
                        link={contents.link}
                        description={contents.description}
                      />
                    ))}
                  </div>
                </Row>
              </Col>
            </div>
          </div>
          <br />
          <div>
            <h2 style={{ textAlign: "center" }}> Awards </h2>
          </div>
          <Awards />
          <Testimonial />
        </Container>
      </section>
    </div>
  );
};
