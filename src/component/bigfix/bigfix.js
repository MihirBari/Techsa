import React from 'react'
import { Summary } from './summary'
import { Patch } from './Patch'
import { Workspace } from './Workspace'

const Bigfixs = () => {
  return (
    <>
    <h2 style={{ textAlign: "center" }}>BigFix</h2>
     <Summary />
     <h2 style={{ textAlign: "center",margin:"20px 0 40px 0" }}>Modules in BigFix</h2>
     <Patch />
     <div style={{ margin:"40px 0 40px 0" }}>
     <Workspace />
     </div>
    </>
  )
}

export default Bigfixs