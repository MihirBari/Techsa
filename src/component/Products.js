import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/SolarWindsLogo-featured-image.jpg";
import projImg2 from "../assets/img/136048.png";
import projImg3 from "../assets/img/Torq.jpeg";


export const Products = () => {
    const projects = [
        {
            title: "SolarWinds",
            imgUrl: projImg1,
            link:"/SolarWinds"
        },
        {
            title: "BigFix",
            imgUrl: projImg2,
            link:"/SolarWinds"
        },
        {
            title: "Torq",
            imgUrl: projImg3,
            link:"/SolarWinds"
        },
    ]

    return (
        <section className="project" id="Products" >
            <Container>
                <Row>
                    <Col>
                        <h2>Products</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Onulla aspernatur voluptas minima fugiat suscipit,
                            corrupti obcaecati facere reiciendis cupiditate repudiandae. Nemo magnam repellat aliquam.</p>
                         <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
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
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}