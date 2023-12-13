import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/SolarWindsLogo-featured-image.jpg";
import projImg2 from "../../assets/img/136048.png";
import projImg3 from "../../assets/Tenable.png";
import projImg4 from "../../assets/img/headerLogoLight.webp";
import projImg5 from "../../assets/Armis.png";

export const Products = () => {
  const projects = [
    {
      title: "SolarWinds",
      imgUrl: projImg1,
      link: "/SolarWinds",
    },
    {
      title: "BigFix",
      imgUrl: projImg2,
      link: "/bigfix",
    },
    {
      title: "Freshworks",
      imgUrl: projImg4,
      link: "/FreshWorks",
    },
    {
      title: "Tenable",
      imgUrl: projImg3,
      link: "/Tenable",
    },
    {
      title: "Armis",
      imgUrl: projImg5,
      link: "/Armis",
    },
  ];

  return (
    <section className="project" id="Products">
      <Container>
        <Row>
          <Col>
            <h2>Technology Partners</h2>
            <p>
              We team up with industry-leading technology partners to deliver
              innovative solutions. Our strategic alliances with these industry
              leaders empower us to stay ahead of the curve and provide our
              customers with top-quality products and services.
            </p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
