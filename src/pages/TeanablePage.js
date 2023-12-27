import React, { useEffect, useState } from 'react'
import { NavBar } from '../component/NavBar'
import { Container } from 'react-bootstrap'
import {Tenable} from "../component/Tenable/Tenable.js"
import { Footer } from '../component/Footer'
import { Loader } from '../component/loader.js'

export const TeanablePage = () => {
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
            <NavBar />
            <Container>
            <div className="tenable">
              <Tenable />
            </div>
            </Container>
            <Footer />
          </div> )}
    </>
  )
}
