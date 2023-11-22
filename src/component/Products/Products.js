import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/SolarWindsLogo-featured-image.jpg";
import projImg2 from "../../assets/img/136048.png";
import projImg3 from "../../assets/img/Torq.jpeg";
import projImg4 from "../../assets/img/headerLogoLight.webp"

export const Products = () => {
    const projects = [
        {
            title: "SolarWinds",
            imgUrl: projImg1,
            link:"/SolarWinds",
            description:`SolarWinds stands out as the sole unified platform that seamlessly 
            combines monitoring, observability, and service management. It empowers users with
             comprehensive insight into their IT infrastructure, enabling proactive identification
              of bottlenecks across the entire system.`
        },
        {
            title: "BigFix",
            imgUrl: projImg2,
            link:"/bigfix",
            description:`BigFix is the result of IBM's purchase of BigFix, Inc. 
            Enabling it to offer additional security and compliance services. 
            The software provides endpoint and security management in a single 
            solution and enables organizations to see and manage physical and 
            virtual endpoints.`
        },
        {
            title: "Freshworks",
            imgUrl: projImg4,
            link:"/FreshWorks",
            description:`BigFix is the result of IBM's purchase of BigFix, Inc. 
            Enabling it to offer additional security and compliance services. 
            The software provides endpoint and security management in a single 
            solution and enables organizations to see and manage physical and 
            virtual endpoints.`
        },
         {
            title: "Torq",
            imgUrl: projImg3,
            link:"/SolarWinds",
            description:`BigFix is the result of IBM's purchase of BigFix, Inc. 
            Enabling it to offer additional security and compliance services. 
            The software provides endpoint and security management in a single 
            solution and enables organizations to see and manage physical and 
            virtual endpoints.`
        },
        {
            title: "Torq",
            imgUrl: projImg3,
            link:"/SolarWinds",
            description:`BigFix is the result of IBM's purchase of BigFix, Inc. 
            Enabling it to offer additional security and compliance services. 
            The software provides endpoint and security management in a single 
            solution and enables organizations to see and manage physical and 
            virtual endpoints.`
        },
    ]

    return (
        <section className="project" id="Products" >
            <Container>
                <Row>
                    <Col>
                        <h2>Technology Partners</h2>
                        <p>We team up with industry-leading technology partners to deliver innovative solutions. 
                        Our strategic alliances with these industry leaders empower us to stay ahead of the
                        curve and provide our customers with top-quality products and services.</p>
                             <Row>
                                {
                                    projects.map((project, index) =>{
                                        return(
                                             <ProjectCard key={index}
                                             {...project} />
                                        )
                                    } )
                                }
                             </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}