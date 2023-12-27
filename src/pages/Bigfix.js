import React,{useState, useEffect} from 'react'
import { NavBar } from "../component/NavBar";
import { Container } from "react-bootstrap";
import Bigfixs from "../component/bigfix/bigfix"
import { Footer } from '../component/Footer'
import { Loader } from '../component/loader'

const Bigfix = () => {
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
    <div className="bigfix">
      <Bigfixs />
    </div>
    </Container>
    <Footer />
    </div> )}
    </>
  )
}

export default Bigfix