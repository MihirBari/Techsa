import React from 'react'
import { NavBar } from '../component/NavBar'
import { Container } from 'react-bootstrap'
import {Tenable} from "../component/Tenable/Tenable.js"

export const TeanablePage = () => {
  return (
    <> 
    <NavBar />
    <Container>
    <div className="tenable">
      <Tenable />
    </div>
    </Container>
    </>
  )
}
