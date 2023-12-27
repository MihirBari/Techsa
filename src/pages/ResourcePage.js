import React, { useEffect, useState } from 'react'
import { Loader } from '../component/loader.js'
import { NavBar } from '../component/NavBar'
import { Footer } from '../component/Footer'
import  {Resource} from '../component/Resource/Resource.js'
import { Helmet } from 'react-helmet'

export const ResourcePage = () => {
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
            <title>Resource | Techsa Services Pvt Ltd.</title>
            <meta name="description" content="Description of your About Us page" />
          </Helmet>
    <NavBar />
    <div className='resource'>
        <Resource />
    </div>
    <Footer />
      </div>)}
    </>
  )
}
