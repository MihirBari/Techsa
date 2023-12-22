import React from 'react'
import { Summary } from './summary'
import { Patch } from './Patch'
import { Workspace } from './Workspace'
import { Compliance } from './Compliance'
import { Inventory } from './Inventory'

const Bigfixs = () => {
  return (
    <>
    <h2 style={{ textAlign: "center" }}>BIGFIX</h2>
     <Summary />
     <h2 style={{ textAlign: "center",margin:"20px 0 40px 0" }}>Feature solution</h2>
     <Patch />
     <div style={{ margin:"40px 0 40px 0" }}>
     <Workspace />
     </div>
     <div style={{ margin:"40px 0 40px 0" }}>
     <Compliance />
     </div>
     <div style={{ margin:"40px 0 40px 0" }}>
     <Inventory />
     </div>
    </>
  )
}

export default Bigfixs