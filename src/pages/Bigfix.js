import React from 'react'
import { NavBar } from "../component/NavBar";
import { Container } from "react-bootstrap";
import Bigfixs from "../component/bigfix/bigfix"

const Bigfix = () => {
  return (
    <> 
    <NavBar />
    <Container>
    <div className="bigfix">
      <Bigfixs />
    </div>
    </Container>
    </>
  )
}

export default Bigfix