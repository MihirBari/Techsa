import React from 'react'
import { Summary } from './summary'
import { Patch } from './Patch'
import { Workspace } from './Workspace'
import { Compliance } from './Compliance'
import { Inventory } from './Inventory'
import { LifeCycle } from './LifeCycle'

const Bigfixs = () => {
  return (
    <>
    <h2 style={{ textAlign: "center" }}>BIGFIX</h2>
     <Summary />
     <h2 style={{ textAlign: "center",margin:"20px 0 40px 0" }}>Modules in BigFix</h2>
     <Patch />
     <div style={{ margin:"40px 0 40px 0" }}>
     <LifeCycle />
     </div>
     <div style={{ margin:"40px 0 40px 0" }}>
     <Compliance />
     </div>
     <div style={{ margin:"40px 0 40px 0" }}>
     <Inventory />
     </div>
     <div style={{ margin:"40px 0 40px 0" }}>
     <Workspace />
     </div>
    </>
  )
}

export default Bigfixs