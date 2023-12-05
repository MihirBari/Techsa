import React from 'react'
import { NavBar } from "../component/NavBar.js";
import { Container } from "react-bootstrap";
import {Armis} from "../component/Armis/Armis.js"

export const ArmisPage = () => {
  return (
    <> 
    <NavBar />
    <Container>
    <div className="armis">
      <Armis />
    </div>
    </Container>
    </>
  )
}
