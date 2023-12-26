import React from 'react'
import { NavBar } from '../component/NavBar'
import { Footer } from '../component/Footer'
import  {Resource} from '../component/Resource/Resource.js'
import { Helmet } from 'react-helmet'

export const ResourcePage = () => {
  return (
    <>
     <Helmet>
            <title>Resource | Techsa Services Pvt Ltd.</title>
            <meta name="description" content="Description of your About Us page" />
          </Helmet>
    <NavBar />
    <div className='resource'>
        <Resource />
    </div>
    <Footer />
    </>
  )
}
