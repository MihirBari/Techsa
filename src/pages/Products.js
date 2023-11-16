import React, { useEffect, useState } from 'react'
import { NavBar } from '../component/NavBar'
import { Loader } from '../component/loader';
import { Footer } from '../component/Footer'
import { Solarwinds } from '../component/ProductPage/Solarwinds';
import { BigFix } from '../component/ProductPage/BigFix';
export const Products = () => {
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
        <>
        <div className='App'>
          <NavBar/>
          <div className='ProductsPage'>
          <Solarwinds />
          <BigFix />
          </div>
         <Footer/>
        </div>
        </>
      )}
    </>
  )
}
