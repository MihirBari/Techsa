import React from 'react'
import Box from './box'
import Image from "./image"
import { TextSolarwinds } from './TextSolarwinds'

export const Solarwinds = () => {
  return (
    <>
    <h2 style={{ textAlign: "center" }}>Solarwinds</h2>
      <div className='solar'
      >
      <Image />
       <TextSolarwinds />
      </div>
      <Box />
    </>
  )
}
