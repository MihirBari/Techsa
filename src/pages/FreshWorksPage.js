import React from 'react'
import { NavBar } from "../component/NavBar.js";
import { Container } from "react-bootstrap";
import {FreshWorks} from "../component/FreshWorks/FreshWorks.js"

export const FreshWorksPage = () => {
  return (
    <> 
    <NavBar />
    <Container>
    <div className="freshworks">
      <FreshWorks />
    </div>
    </Container>
    </>
  )
}
