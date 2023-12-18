import React from 'react'
import { NavBar } from '../component/NavBar'
import { Footer } from '../component/Footer'
import  {Resource} from '../component/Resource/Resource.js'

export const ResourcePage = () => {
  return (
    <>
    <NavBar />
    <div className='resource'>
        <Resource />
    </div>
    <Footer />
    </>
  )
}
