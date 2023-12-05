import React from 'react'
import { Summary } from './Summary'
import BoxContainer from './BoxContainer'
import CRM from './CRM'

export const FreshWorks = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>FreshWorks</h2>
      <Summary />
     <BoxContainer />
     <CRM />
    </>
  )
}
