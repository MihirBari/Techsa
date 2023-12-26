import React from 'react'
import { NavBar } from "../component/NavBar.js";
import { Container } from "react-bootstrap";
import {Armis} from "../component/Armis/Armis.js"
import { Helmet } from 'react-helmet';

export const ArmisPage = () => {
  return (
    <> 
    <Helmet>
            <title>Armis | Techsa Services Pvt Ltd.</title>
            <meta name="description" content="Description of your About Us page" />
          </Helmet>
    <NavBar />
    <Container>
    <div className="armis">
      <Armis />
    </div>
    </Container>
    </>
  )
}
