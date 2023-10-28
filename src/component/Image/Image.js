import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import './Image.css'
import { BFSIcard } from './BFSIcard';

export const Image = () => {
    return (
        <div className="con">
          <h1 className="heading">Our Customers</h1>
          <Container>
                <Row>
                    <Col>
                         <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                        <Nav variant="pills" className="nav-pills  justify-content-center align-items-center" id="pills-tab" >
                            <Nav.Item>
                                <Nav.Link eventKey="first" >BFSI</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">IT</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >
                                   services
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="forth" >
                                   Manufacture
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <BFSIcard />         
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" >
                            <BFSIcard />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" >
                            <BFSIcard />
                            </Tab.Pane>
                            <Tab.Pane eventKey="forth" >
                            <BFSIcard />
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
      );
}