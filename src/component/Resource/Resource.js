import React from 'react'
import {Module} from './Module.js'
import { SolarwindCase } from './SolarwindCase.js'
import { Tab, Nav } from "react-bootstrap";

export const Resource = () => {
  return (
    <div>
        <h2 style={{textAlign:'center'}}>CASE STUDIES</h2>
        <div className="project" id="project">
                         <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                        <Nav variant="pills" className="nav-pills 
                         justify-content-center align-items-center" 
                        id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first" >BIGFIX</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">SOLARWINDS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">TENABLE</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" >
                                <Module />         
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" >
                            <SolarwindCase />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" >
                            
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
        </div>
    </div>
  )
}
