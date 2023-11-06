import React, { useEffect, useState } from 'react'
import { NavBar } from '../component/NavBar'
import { Loader } from "../component/loader";
import { Footer } from "../component/Footer";

export const AboutUs = () => {

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
    <div className='App'>
    <NavBar />
    <div>AboutUs</div>
    {/* <Footer/> */}
    </div>
      )}
    </>

  )
}