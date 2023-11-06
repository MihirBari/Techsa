import React, { useEffect, useState } from 'react'
import { NavBar } from '../component/NavBar'
import { Loader } from '../component/loader';

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
        <div className='App'>
          <NavBar/>
          <p>bqusgsgyg</p>
        </div>
      )}
    </>
  )
}
