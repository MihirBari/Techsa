import React from 'react'
import { NavBar } from "../component/NavBar.js";
import { Container } from "react-bootstrap";
import {FreshWorks} from "../component/FreshWorks/FreshWorks.js"
import { Helmet } from 'react-helmet';

export const FreshWorksPage = () => {
  return (
    <> 
    <Helmet>
            <title>FreshWorks | Techsa Services Pvt Ltd.</title>
            <meta name="description" content="Description of your About Us page" />
          </Helmet>
    <NavBar />
    <Container>
    <div className="freshworks">
      <FreshWorks />
    </div>
    </Container>
    </>
  )
}
