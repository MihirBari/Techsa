import React, { useEffect, useState } from 'react'
import { Loader } from '../component/loader.js'
import { NavBar } from "../component/NavBar.js";
import { Container } from "react-bootstrap";
import {FreshWorks} from "../component/FreshWorks/FreshWorks.js"
import { Helmet } from 'react-helmet';
import { Footer } from '../component/Footer'

export const FreshWorksPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
   
  return (
    <>
     {loading ? (
          <Loader />
        ) : (
    <div>
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
    <Footer />
    </div> )}
    </>
  )
}
